// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.9.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    AttributeCallback,
    AttributeContentType,
    AttributeType,
    BaseAttributeConstraint,
    BaseAttributeContentDto,
    CustomAttribute,
    CustomAttributeProperties,
    DataAttribute,
    GroupAttribute,
    InfoAttribute,
    MetadataAttribute,
} from "./";

/**
 * @type BaseAttributeDto
 * Base Attribute definition
 * @export
 */
export type BaseAttributeDto = CustomAttribute | DataAttribute | GroupAttribute | InfoAttribute | MetadataAttribute;
