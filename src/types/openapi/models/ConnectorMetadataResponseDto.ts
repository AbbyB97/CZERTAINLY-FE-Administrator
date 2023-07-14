// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { AttributeContentType } from "./";

/**
 * @export
 * @interface ConnectorMetadataResponseDto
 */
export interface ConnectorMetadataResponseDto {
    /**
     * Metadata Name
     * @type {string}
     * @memberof ConnectorMetadataResponseDto
     */
    name: string;
    /**
     * Metadata UUID
     * @type {string}
     * @memberof ConnectorMetadataResponseDto
     */
    uuid: string;
    /**
     * @type {AttributeContentType}
     * @memberof ConnectorMetadataResponseDto
     */
    contentType: AttributeContentType;
    /**
     * Metadata Label
     * @type {string}
     * @memberof ConnectorMetadataResponseDto
     */
    label: string;
    /**
     * Connector UUID
     * @type {string}
     * @memberof ConnectorMetadataResponseDto
     */
    connectorUuid: string;
}
