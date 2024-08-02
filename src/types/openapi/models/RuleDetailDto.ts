// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    ConditionDto,
    Resource,
} from './';

/**
 * List of Rules in the Rule Trigger
 * @export
 * @interface RuleDetailDto
 */
export interface RuleDetailDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof RuleDetailDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof RuleDetailDto
     */
    name: string;
    /**
     * Description of the Rule
     * @type {string}
     * @memberof RuleDetailDto
     */
    description?: string;
    /**
     * @type {Resource}
     * @memberof RuleDetailDto
     */
    resource: Resource;
    /**
     * List of conditions in the Rule
     * @type {Array<ConditionDto>}
     * @memberof RuleDetailDto
     */
    conditions: Array<ConditionDto>;
}


