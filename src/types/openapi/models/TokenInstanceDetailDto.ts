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

import type { MetadataResponseDto, ResponseAttributeDto, TokenInstanceStatusDetailDto } from "./";

/**
 * @export
 * @interface TokenInstanceDetailDto
 */
export interface TokenInstanceDetailDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof TokenInstanceDetailDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof TokenInstanceDetailDto
     */
    name: string;
    /**
     * Connector Name
     * @type {string}
     * @memberof TokenInstanceDetailDto
     */
    connectorName?: string;
    /**
     * Connector UUID
     * @type {string}
     * @memberof TokenInstanceDetailDto
     */
    connectorUuid?: string;
    /**
     * Connector Kind
     * @type {string}
     * @memberof TokenInstanceDetailDto
     */
    kind?: string;
    /**
     * @type {TokenInstanceStatusDetailDto}
     * @memberof TokenInstanceDetailDto
     */
    status: TokenInstanceStatusDetailDto;
    /**
     * Number of Token Profiles associated
     * @type {number}
     * @memberof TokenInstanceDetailDto
     */
    tokenProfiles: number;
    /**
     * List of Token instance Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof TokenInstanceDetailDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * Token instance Metadata
     * @type {Array<MetadataResponseDto>}
     * @memberof TokenInstanceDetailDto
     */
    metadata?: Array<MetadataResponseDto>;
    /**
     * Custom Attributes for the Token Instance
     * @type {Array<ResponseAttributeDto>}
     * @memberof TokenInstanceDetailDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
}
