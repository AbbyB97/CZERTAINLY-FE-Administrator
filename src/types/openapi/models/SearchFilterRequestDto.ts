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

import type {
    SearchCondition,
    SearchableFields,
} from './';

/**
 * Certificate filter input
 * @export
 * @interface SearchFilterRequestDto
 */
export interface SearchFilterRequestDto {
    /**
     * @type {SearchableFields}
     * @memberof SearchFilterRequestDto
     */
    field: SearchableFields;
    /**
     * @type {SearchCondition}
     * @memberof SearchFilterRequestDto
     */
    condition: SearchCondition;
    /**
     * Value to match
     * @type {object}
     * @memberof SearchFilterRequestDto
     */
    value?: object;
}