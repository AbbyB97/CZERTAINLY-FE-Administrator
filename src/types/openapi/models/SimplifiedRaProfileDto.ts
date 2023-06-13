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

/**
 * RA Profile associated to the Certificate
 * @export
 * @interface SimplifiedRaProfileDto
 */
export interface SimplifiedRaProfileDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof SimplifiedRaProfileDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof SimplifiedRaProfileDto
     */
    name: string;
    /**
     * Enabled flag - true = enabled; false = disabled
     * @type {boolean}
     * @memberof SimplifiedRaProfileDto
     */
    enabled: boolean;
    /**
     * Authority Instance UUID
     * @type {string}
     * @memberof SimplifiedRaProfileDto
     */
    authorityInstanceUuid?: string;
}
