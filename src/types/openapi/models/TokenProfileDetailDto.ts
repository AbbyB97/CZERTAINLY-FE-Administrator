// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { KeyUsage, ResponseAttributeDto, TokenInstanceStatus } from "./";

/**
 * @export
 * @interface TokenProfileDetailDto
 */
export interface TokenProfileDetailDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof TokenProfileDetailDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof TokenProfileDetailDto
     */
    name: string;
    /**
     * Description of Token Profile
     * @type {string}
     * @memberof TokenProfileDetailDto
     */
    description?: string;
    /**
     * UUID of Token Instance
     * @type {string}
     * @memberof TokenProfileDetailDto
     */
    tokenInstanceUuid: string;
    /**
     * Name of Token instance
     * @type {string}
     * @memberof TokenProfileDetailDto
     */
    tokenInstanceName: string;
    /**
     * List of Token Profile attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof TokenProfileDetailDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof TokenProfileDetailDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * @type {TokenInstanceStatus}
     * @memberof TokenProfileDetailDto
     */
    tokenInstanceStatus: TokenInstanceStatus;
    /**
     * Enabled flag - true = enabled; false = disabled
     * @type {boolean}
     * @memberof TokenProfileDetailDto
     */
    enabled: boolean;
    /**
     * Usages for the Keys assoiated to the profile
     * @type {Array<KeyUsage>}
     * @memberof TokenProfileDetailDto
     */
    usages: Array<KeyUsage>;
}
