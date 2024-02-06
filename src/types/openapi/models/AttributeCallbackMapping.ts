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

import type {
    AttributeContentType,
    AttributeType,
    AttributeValueTarget,
} from './';

/**
 * Mappings for the callback method
 * @export
 * @interface AttributeCallbackMapping
 */
export interface AttributeCallbackMapping {
    /**
     * Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set.
     * @type {string}
     * @memberof AttributeCallbackMapping
     */
    from?: string;
    /**
     * @type {AttributeType}
     * @memberof AttributeCallbackMapping
     */
    attributeType?: AttributeType;
    /**
     * @type {AttributeContentType}
     * @memberof AttributeCallbackMapping
     */
    attributeContentType?: AttributeContentType;
    /**
     * Name of the path variable or request param or body field which is to be used to assign value of attribute
     * @type {string}
     * @memberof AttributeCallbackMapping
     */
    to: string;
    /**
     * Set of targets for propagating value.
     * @type {Array<AttributeValueTarget>}
     * @memberof AttributeCallbackMapping
     */
    targets: Array<AttributeValueTarget>;
    /**
     * Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time.
     * @type {object}
     * @memberof AttributeCallbackMapping
     */
    value?: object;
}


