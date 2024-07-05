import Widget from 'components/Widget';
import dagre from 'dagre';
import { useCallback, useEffect, useState } from 'react';

import cx from 'classnames';
import {
    Background,
    BackgroundVariant,
    Controls,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    Position,
    ReactFlow,
    Viewport,
    applyEdgeChanges,
    applyNodeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomNodeData } from 'types/flowchart';
import FloatingEdge from './CustomEdge';
import CustomFlowNode from './CustomFlowNode';
import style from './flowChart.module.scss';
const nodeTypes = { customFlowNode: CustomFlowNode };

export interface CustomNode extends Node {
    data: CustomNodeData;
}

export interface LegendItem {
    icon: string;
    label: string;
    color: string;
}

export interface FlowChartProps {
    flowChartTitle?: string;
    flowDirection?: 'TB' | 'BT' | 'LR' | 'RL' | 'STAR';
    flowChartNodes: CustomNode[];
    flowChartEdges: Edge[];
    defaultViewport?: Viewport | undefined;
    busy?: boolean;
    legends?: LegendItem[];
}

const edgeTypes = {
    floating: FloatingEdge,
};
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const nodeWidth = 400;
export const nodeHeight = 100;

const getLayoutedElements = (nodes: CustomNode[], edges: Edge[], direction = 'TB') => {
    if (direction === 'STAR') {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const minRadius = 250; // Minimum radius
        const mainNode = nodes.find((node) => node.data.isMainNode);
        const surroundingNodes = nodes.filter((node) => !node.data.isMainNode && !node.hidden);
        const angleIncrement = (2 * Math.PI) / surroundingNodes.length;

        // Calculate dynamic radius based on the number of nodes to ensure minimum distance of 200px
        let dynamicRadius = surroundingNodes.length * 60; // Example calculation, adjust as needed
        dynamicRadius = Math.max(dynamicRadius, minRadius); // Ensure radius is not less than minRadius
        let mainNodePosition = { x: 0, y: 0 };
        if (mainNode) {
            const currentNodeHeight = mainNode.data?.description ? nodeHeight + 35 : nodeHeight;
            // Position the main node at the center
            mainNode.position = { x: centerX - nodeWidth / 2, y: centerY - currentNodeHeight / 2 };
            mainNodePosition = mainNode.position;
        }

        const someGroupedNodes = surroundingNodes.some((node) => node.data.group);

        if (someGroupedNodes) {
            const nodesByGroups = surroundingNodes.reduce(
                (acc, node) => {
                    if (node.data.group) {
                        acc[node.data.group] = acc[node.data.group] || [];
                        acc[node.data.group].push(node);
                    } else {
                        acc['nonGrouped'] = acc['nonGrouped'] || [];
                        acc['nonGrouped'].push(node);
                    }
                    return acc;
                },
                {} as Record<string, CustomNode[]>,
            );

            // Assuming mainNodePosition is the position of the main node
            const radius = 450; // Distance from the main node
            const groupKeys = Object.keys(nodesByGroups);
            const angleIncrement = (2 * Math.PI) / groupKeys.length; // Divide the circle based on the number of groups

            groupKeys.forEach((groupKey, index) => {
                const angle = angleIncrement * index;
                // check if it is a odd index
                // const isOdd = index % 2 === 1;
                const groupPosition = {
                    x: mainNodePosition.x + radius * 1.75 * Math.cos(angle),
                    y: mainNodePosition.y + radius * Math.sin(angle),
                };

                // Position each node in the group around the group's central position
                nodesByGroups[groupKey].forEach((node, nodeIndex) => {
                    const nodeAngle = ((2 * Math.PI) / nodesByGroups[groupKey].length) * nodeIndex;
                    const nodeRadius = 125 * (nodesByGroups[groupKey].length * 0.3); // Smaller radius for nodes within a group
                    // const lastOutOfTwoNodes = nodesByGroups[groupKey].length % 2 === 0;
                    const onlyTwoNodes = nodesByGroups[groupKey].length === 2;
                    let yOffset = 0;
                    if (onlyTwoNodes && nodeIndex === 1) {
                        yOffset = 105;
                    }
                    node.position = {
                        x: groupPosition.x + nodeRadius * 1.75 * Math.cos(nodeAngle),
                        y: groupPosition.y + nodeRadius * Math.sin(nodeAngle) + yOffset,
                    };
                });
            });
        } else {
            surroundingNodes.forEach((node, index) => {
                // Calculate the angle for the current node
                const angle = angleIncrement * index;
                const currentNodeHeight = node.data?.description ? nodeHeight + 35 : nodeHeight;

                // Calculate and set the position for each surrounding node using the dynamic radius
                node.position = {
                    x: centerX + dynamicRadius * Math.cos(angle) - nodeWidth / 2,
                    y: centerY + dynamicRadius * Math.sin(angle) - currentNodeHeight / 2,
                };
                node.targetPosition = Position.Top;
                node.sourcePosition = Position.Bottom;
            });
        }
        return { nodes, edges };
    } else {
        const isHorizontal = direction === 'LR';
        dagreGraph.setGraph({ rankdir: direction });

        nodes.forEach((node) => {
            // const currentNodeHeight = node.data.otherProperties?.length ? nodeHeight + node.data.otherProperties?.length * 20 : nodeHeight;
            const currentNodeHeight = node.data?.description ? nodeHeight + 35 : nodeHeight;
            dagreGraph.setNode(node.id, { width: nodeWidth, height: currentNodeHeight });
        });

        edges.forEach((edge) => {
            dagreGraph.setEdge(edge.source, edge.target);
        });

        dagre.layout(dagreGraph);

        nodes.forEach((node: CustomNode) => {
            const nodeWithPosition = dagreGraph.node(node.id);
            node.targetPosition = isHorizontal ? Position.Left : Position.Top;
            node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
            const currentNodeHeight = node.data?.description ? nodeHeight + 35 : nodeHeight;
            node.position = {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - currentNodeHeight / 2,
            };

            return node;
        });

        return { nodes, edges };
    }
};

const FlowChart = ({ flowChartTitle, flowChartEdges, flowChartNodes, defaultViewport, busy, flowDirection, legends }: FlowChartProps) => {
    const [nodes, setNodes] = useState(flowChartNodes);
    const [edges, setEdges] = useState(flowChartEdges);
    const defaultEdgeOptions = { animated: true };

    const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
    const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);
    // TODO: Implement onConnect in future if needed
    // const onConnect = useCallback((connection: Edge | Connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

    useEffect(() => {
        const { nodes, edges } = getLayoutedElements(flowChartNodes, flowChartEdges, flowDirection);
        setNodes(nodes);
        setEdges(edges);
    }, [flowChartEdges, flowChartNodes, flowDirection]);

    return (
        <Widget className={style.flowWidget} busy={busy}>
            {flowChartTitle && <h5 className="text-muted">{flowChartTitle}</h5>}
            <div className={cx(style.flowChartContainer, style.floatingedges)}>
                <ReactFlow
                    nodes={nodes}
                    proOptions={{ hideAttribution: true }}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    fitView={!defaultViewport}
                    defaultViewport={defaultViewport}
                    defaultEdgeOptions={defaultEdgeOptions}
                    edgeTypes={edgeTypes}
                    // connectionLineComponent={FloatingConnectionLine}
                >
                    <Controls />
                    <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
                </ReactFlow>
            </div>
            {legends?.length && (
                <div className={style.legendContainer}>
                    {/* <h6>Legend</h6> */}
                    <div className={style.legendItems}>
                        {legends.map((legend, index) => (
                            <div key={index} className={style.legendItem}>
                                <div className={style.legendIcon} style={{ color: legend.color }}>
                                    <i className={legend.icon} style={{ padding: '5px' }} />
                                </div>
                                <span>{legend.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Widget>
    );
};

export default FlowChart;
