// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.5.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface ObjectPermissionsRequestDto
 */
export interface ObjectPermissionsRequestDto {
    /**
     * UUID of the Object
     * @type {string}
     * @memberof ObjectPermissionsRequestDto
     */
    uuid: string;
    /**
     * Name of the Object
     * @type {string}
     * @memberof ObjectPermissionsRequestDto
     */
    name: string;
    /**
     * Allowed Action list
     * @type {Array<string>}
     * @memberof ObjectPermissionsRequestDto
     */
    allow?: Array<string>;
    /**
     * Denied Action list
     * @type {Array<string>}
     * @memberof ObjectPermissionsRequestDto
     */
    deny?: Array<string>;
}