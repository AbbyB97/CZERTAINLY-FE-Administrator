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

import type { BaseAttributeContentDto, Resource } from "./";

/**
 * @export
 * @interface CustomAttributeUpdateRequestDto
 */
export interface CustomAttributeUpdateRequestDto {
    /**
     * Attribute description
     * @type {string}
     * @memberof CustomAttributeUpdateRequestDto
     */
    description?: string;
    /**
     * Friendly name of the the Attribute
     * @type {string}
     * @memberof CustomAttributeUpdateRequestDto
     */
    label: string;
    /**
     * Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.
     * @type {boolean}
     * @memberof CustomAttributeUpdateRequestDto
     */
    visible?: boolean;
    /**
     * Group of the Attribute, used for the logical grouping of the Attribute
     * @type {string}
     * @memberof CustomAttributeUpdateRequestDto
     */
    group?: string;
    /**
     * Boolean determining if the Attribute is required. If true, the Attribute must be provided.
     * @type {boolean}
     * @memberof CustomAttributeUpdateRequestDto
     */
    required?: boolean;
    /**
     * Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.
     * @type {boolean}
     * @memberof CustomAttributeUpdateRequestDto
     */
    readOnly?: boolean;
    /**
     * Boolean determining if the Attribute contains list of values in the content
     * @type {boolean}
     * @memberof CustomAttributeUpdateRequestDto
     */
    list?: boolean;
    /**
     * Boolean determining if the Attribute can have multiple values
     * @type {boolean}
     * @memberof CustomAttributeUpdateRequestDto
     */
    multiSelect?: boolean;
    /**
     * Predefined content for the attribute if needed. The content of the Attribute must satisfy the type
     * @type {Array<BaseAttributeContentDto>}
     * @memberof CustomAttributeUpdateRequestDto
     */
    content?: Array<BaseAttributeContentDto>;
    /**
     * List of resource to be associated with the custom attribute
     * @type {Array<Resource>}
     * @memberof CustomAttributeUpdateRequestDto
     */
    resources?: Array<Resource>;
}
