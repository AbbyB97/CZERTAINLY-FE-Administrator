// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    ResponseAttributeDto,
} from './';

/**
 * @export
 * @interface AuthorityInstanceDto
 */
export interface AuthorityInstanceDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof AuthorityInstanceDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof AuthorityInstanceDto
     */
    name: string;
    /**
     * List of Authority instance Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof AuthorityInstanceDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof AuthorityInstanceDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * Status of Authority instance
     * @type {string}
     * @memberof AuthorityInstanceDto
     */
    status: string;
    /**
     * UUID of Authority provider
     * @type {string}
     * @memberof AuthorityInstanceDto
     */
    connectorUuid: string;
    /**
     * Name of Authority provider
     * @type {string}
     * @memberof AuthorityInstanceDto
     */
    connectorName: string;
    /**
     * Authority Instance Kind
     * @type {string}
     * @memberof AuthorityInstanceDto
     */
    kind: string;
}
