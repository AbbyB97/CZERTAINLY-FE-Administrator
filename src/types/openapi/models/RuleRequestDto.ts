// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.11.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    Resource,
    RuleConditionRequestDto,
} from './';

/**
 * @export
 * @interface RuleRequestDto
 */
export interface RuleRequestDto {
    /**
     * Name of the Rule
     * @type {string}
     * @memberof RuleRequestDto
     */
    name: string;
    /**
     * Description of the Rule
     * @type {string}
     * @memberof RuleRequestDto
     */
    description?: string;
    /**
     * @type {Resource}
     * @memberof RuleRequestDto
     */
    resource: Resource;
    /**
     * Type of the Resource associated with the Rule
     * @type {string}
     * @memberof RuleRequestDto
     */
    resourceType?: string;
    /**
     * Format of the Resource associated with the Rule
     * @type {string}
     * @memberof RuleRequestDto
     */
    resourceFormat?: string;
    /**
     * List of conditions to add in the Rule
     * @type {Array<RuleConditionRequestDto>}
     * @memberof RuleRequestDto
     */
    conditions?: Array<RuleConditionRequestDto>;
    /**
     * List of UUIDs of existing condition groups to add in the Rule
     * @type {Array<string>}
     * @memberof RuleRequestDto
     */
    conditionGroupsUuids?: Array<string>;
}


