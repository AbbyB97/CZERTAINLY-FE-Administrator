// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.10.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { AuthType, ConnectorStatus, FunctionGroupDto, ResponseAttributeDto } from "./";

/**
 * @export
 * @interface ConnectorDto
 */
export interface ConnectorDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof ConnectorDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof ConnectorDto
     */
    name: string;
    /**
     * List of Function Groups implemented by the Connector
     * @type {Array<FunctionGroupDto>}
     * @memberof ConnectorDto
     */
    functionGroups: Array<FunctionGroupDto>;
    /**
     * URL of the Connector
     * @type {string}
     * @memberof ConnectorDto
     */
    url: string;
    /**
     * @type {AuthType}
     * @memberof ConnectorDto
     */
    authType: AuthType;
    /**
     * List of Attributes for the authentication type
     * @type {Array<ResponseAttributeDto>}
     * @memberof ConnectorDto
     */
    authAttributes?: Array<ResponseAttributeDto>;
    /**
     * @type {ConnectorStatus}
     * @memberof ConnectorDto
     */
    status: ConnectorStatus;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof ConnectorDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
}
