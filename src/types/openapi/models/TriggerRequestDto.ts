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
    TriggerType,
} from './';

/**
 * @export
 * @interface TriggerRequestDto
 */
export interface TriggerRequestDto {
    /**
     * Name of the trigger
     * @type {string}
     * @memberof TriggerRequestDto
     */
    name: string;
    /**
     * Description of the trigger
     * @type {string}
     * @memberof TriggerRequestDto
     */
    description?: string;
    /**
     * @type {TriggerType}
     * @memberof TriggerRequestDto
     */
    type: TriggerType;
    /**
     * @type {Resource}
     * @memberof TriggerRequestDto
     */
    resource: Resource;
    /**
     * Flag if to ignore object when trigger rules are matched and do not perform any actions and stop evaluating other triggers. Based on context could have other implications to object processing. If ignore is set, trigger does not have any actions.
     * @type {boolean}
     * @memberof TriggerRequestDto
     */
    ignoreTrigger: boolean;
    /**
     * Event that should fire trigger
     * @type {string}
     * @memberof TriggerRequestDto
     */
    event?: TriggerRequestDtoEventEnum;
    /**
     * @type {Resource}
     * @memberof TriggerRequestDto
     */
    eventResource?: Resource;
    /**
     * List of UUIDs of existing rules to add to the trigger
     * @type {Array<string>}
     * @memberof TriggerRequestDto
     */
    rulesUuids?: Array<string>;
    /**
     * List of UUIDs of existing actions to add to the trigger
     * @type {Array<string>}
     * @memberof TriggerRequestDto
     */
    actionsUuids?: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum TriggerRequestDtoEventEnum {
    DiscoveryFinished = 'discoveryFinished'
}

