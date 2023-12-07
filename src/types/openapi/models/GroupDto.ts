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

import type { ResponseAttributeDto } from "./";

/**
 * Key Group
 * @export
 * @interface GroupDto
 */
export interface GroupDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof GroupDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof GroupDto
     */
    name: string;
    /**
     * Description of the Group
     * @type {string}
     * @memberof GroupDto
     */
    description?: string;
    /**
     * Group contact email
     * @type {string}
     * @memberof GroupDto
     */
    email?: string;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof GroupDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
}
