// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    ActionDetailDto,
    ActionDto,
    ActionRequestDto,
    AuthenticationServiceExceptionDto,
    ExecutionDto,
    ExecutionRequestDto,
    Resource,
    UpdateActionRequestDto,
    UpdateExecutionRequestDto,
} from '../models';

export interface CreateActionRequest {
    actionRequestDto: ActionRequestDto;
}

export interface CreateExecutionRequest {
    executionRequestDto: ExecutionRequestDto;
}

export interface DeleteActionRequest {
    actionUuid: string;
}

export interface DeleteExecutionRequest {
    executionUuid: string;
}

export interface GetActionRequest {
    actionUuid: string;
}

export interface GetExecutionRequest {
    executionUuid: string;
}

export interface ListActionsRequest {
    resource?: Resource;
}

export interface ListExecutionsRequest {
    resource?: Resource;
}

export interface UpdateActionRequest {
    actionUuid: string;
    updateActionRequestDto: UpdateActionRequestDto;
}

export interface UpdateExecutionRequest {
    executionUuid: string;
    updateExecutionRequestDto: UpdateExecutionRequestDto;
}

/**
 * no description
 */
export class WorkflowActionsManagementApi extends BaseAPI {

    /**
     * Create Action
     */
    createAction({ actionRequestDto }: CreateActionRequest): Observable<ActionDetailDto>
    createAction({ actionRequestDto }: CreateActionRequest, opts?: OperationOpts): Observable<AjaxResponse<ActionDetailDto>>
    createAction({ actionRequestDto }: CreateActionRequest, opts?: OperationOpts): Observable<ActionDetailDto | AjaxResponse<ActionDetailDto>> {
        throwIfNullOrUndefined(actionRequestDto, 'actionRequestDto', 'createAction');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ActionDetailDto>({
            url: '/v1/workflows/actions',
            method: 'POST',
            headers,
            body: actionRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Create Execution
     */
    createExecution({ executionRequestDto }: CreateExecutionRequest): Observable<ExecutionDto>
    createExecution({ executionRequestDto }: CreateExecutionRequest, opts?: OperationOpts): Observable<AjaxResponse<ExecutionDto>>
    createExecution({ executionRequestDto }: CreateExecutionRequest, opts?: OperationOpts): Observable<ExecutionDto | AjaxResponse<ExecutionDto>> {
        throwIfNullOrUndefined(executionRequestDto, 'executionRequestDto', 'createExecution');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ExecutionDto>({
            url: '/v1/workflows/executions',
            method: 'POST',
            headers,
            body: executionRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Delete Action
     */
    deleteAction({ actionUuid }: DeleteActionRequest): Observable<void>
    deleteAction({ actionUuid }: DeleteActionRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteAction({ actionUuid }: DeleteActionRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(actionUuid, 'actionUuid', 'deleteAction');

        return this.request<void>({
            url: '/v1/workflows/actions/{actionUuid}'.replace('{actionUuid}', encodeURI(actionUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Delete Execution
     */
    deleteExecution({ executionUuid }: DeleteExecutionRequest): Observable<void>
    deleteExecution({ executionUuid }: DeleteExecutionRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteExecution({ executionUuid }: DeleteExecutionRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(executionUuid, 'executionUuid', 'deleteExecution');

        return this.request<void>({
            url: '/v1/workflows/executions/{executionUuid}'.replace('{executionUuid}', encodeURI(executionUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Get Action Details
     */
    getAction({ actionUuid }: GetActionRequest): Observable<ActionDetailDto>
    getAction({ actionUuid }: GetActionRequest, opts?: OperationOpts): Observable<AjaxResponse<ActionDetailDto>>
    getAction({ actionUuid }: GetActionRequest, opts?: OperationOpts): Observable<ActionDetailDto | AjaxResponse<ActionDetailDto>> {
        throwIfNullOrUndefined(actionUuid, 'actionUuid', 'getAction');

        return this.request<ActionDetailDto>({
            url: '/v1/workflows/actions/{actionUuid}'.replace('{actionUuid}', encodeURI(actionUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Execution Details
     */
    getExecution({ executionUuid }: GetExecutionRequest): Observable<ExecutionDto>
    getExecution({ executionUuid }: GetExecutionRequest, opts?: OperationOpts): Observable<AjaxResponse<ExecutionDto>>
    getExecution({ executionUuid }: GetExecutionRequest, opts?: OperationOpts): Observable<ExecutionDto | AjaxResponse<ExecutionDto>> {
        throwIfNullOrUndefined(executionUuid, 'executionUuid', 'getExecution');

        return this.request<ExecutionDto>({
            url: '/v1/workflows/executions/{executionUuid}'.replace('{executionUuid}', encodeURI(executionUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List Actions
     */
    listActions({ resource }: ListActionsRequest): Observable<Array<ActionDto>>
    listActions({ resource }: ListActionsRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<ActionDto>>>
    listActions({ resource }: ListActionsRequest, opts?: OperationOpts): Observable<Array<ActionDto> | AjaxResponse<Array<ActionDto>>> {

        const query: HttpQuery = {};

        if (resource != null) { query['resource'] = resource; }

        return this.request<Array<ActionDto>>({
            url: '/v1/workflows/actions',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * List executions
     */
    listExecutions({ resource }: ListExecutionsRequest): Observable<Array<ExecutionDto>>
    listExecutions({ resource }: ListExecutionsRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<ExecutionDto>>>
    listExecutions({ resource }: ListExecutionsRequest, opts?: OperationOpts): Observable<Array<ExecutionDto> | AjaxResponse<Array<ExecutionDto>>> {

        const query: HttpQuery = {};

        if (resource != null) { query['resource'] = resource; }

        return this.request<Array<ExecutionDto>>({
            url: '/v1/workflows/executions',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Update Action
     */
    updateAction({ actionUuid, updateActionRequestDto }: UpdateActionRequest): Observable<ActionDetailDto>
    updateAction({ actionUuid, updateActionRequestDto }: UpdateActionRequest, opts?: OperationOpts): Observable<AjaxResponse<ActionDetailDto>>
    updateAction({ actionUuid, updateActionRequestDto }: UpdateActionRequest, opts?: OperationOpts): Observable<ActionDetailDto | AjaxResponse<ActionDetailDto>> {
        throwIfNullOrUndefined(actionUuid, 'actionUuid', 'updateAction');
        throwIfNullOrUndefined(updateActionRequestDto, 'updateActionRequestDto', 'updateAction');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ActionDetailDto>({
            url: '/v1/workflows/actions/{actionUuid}'.replace('{actionUuid}', encodeURI(actionUuid)),
            method: 'PUT',
            headers,
            body: updateActionRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Update Execution
     */
    updateExecution({ executionUuid, updateExecutionRequestDto }: UpdateExecutionRequest): Observable<ExecutionDto>
    updateExecution({ executionUuid, updateExecutionRequestDto }: UpdateExecutionRequest, opts?: OperationOpts): Observable<AjaxResponse<ExecutionDto>>
    updateExecution({ executionUuid, updateExecutionRequestDto }: UpdateExecutionRequest, opts?: OperationOpts): Observable<ExecutionDto | AjaxResponse<ExecutionDto>> {
        throwIfNullOrUndefined(executionUuid, 'executionUuid', 'updateExecution');
        throwIfNullOrUndefined(updateExecutionRequestDto, 'updateExecutionRequestDto', 'updateExecution');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ExecutionDto>({
            url: '/v1/workflows/executions/{executionUuid}'.replace('{executionUuid}', encodeURI(executionUuid)),
            method: 'PUT',
            headers,
            body: updateExecutionRequestDto,
        }, opts?.responseOpts);
    };

}
