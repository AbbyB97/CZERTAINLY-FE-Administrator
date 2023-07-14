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

import type { AuthType, RequestAttributeDto } from "./";

/**
 * @export
 * @interface ConnectorUpdateRequestDto
 */
export interface ConnectorUpdateRequestDto {
    /**
     * URL of the Connector to connect
     * @type {string}
     * @memberof ConnectorUpdateRequestDto
     */
    url?: string;
    /**
     * @type {AuthType}
     * @memberof ConnectorUpdateRequestDto
     */
    authType?: AuthType;
    /**
     * List of authentication Attributes. Required if the authentication type is not NONE
     * @type {Array<RequestAttributeDto>}
     * @memberof ConnectorUpdateRequestDto
     */
    authAttributes?: Array<RequestAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof ConnectorUpdateRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}
