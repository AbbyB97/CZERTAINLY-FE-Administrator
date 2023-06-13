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

import type { CertificateInLocationDto, MetadataResponseDto, ResponseAttributeDto } from "./";

/**
 * @export
 * @interface LocationDto
 */
export interface LocationDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof LocationDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof LocationDto
     */
    name: string;
    /**
     * Description of the Location
     * @type {string}
     * @memberof LocationDto
     */
    description?: string;
    /**
     * UUID of Entity instance
     * @type {string}
     * @memberof LocationDto
     */
    entityInstanceUuid: string;
    /**
     * Name of Entity instance
     * @type {string}
     * @memberof LocationDto
     */
    entityInstanceName: string;
    /**
     * List of Location attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof LocationDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof LocationDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * Enabled flag - true = enabled; false = disabled
     * @type {boolean}
     * @memberof LocationDto
     */
    enabled: boolean;
    /**
     * If the location supports multiple Certificates
     * @type {boolean}
     * @memberof LocationDto
     */
    supportMultipleEntries: boolean;
    /**
     * If the location supports key management operations
     * @type {boolean}
     * @memberof LocationDto
     */
    supportKeyManagement: boolean;
    /**
     * List of Certificates in Location
     * @type {Array<CertificateInLocationDto>}
     * @memberof LocationDto
     */
    certificates: Array<CertificateInLocationDto>;
    /**
     * Location metadata
     * @type {Array<MetadataResponseDto>}
     * @memberof LocationDto
     */
    metadata?: Array<MetadataResponseDto>;
}
