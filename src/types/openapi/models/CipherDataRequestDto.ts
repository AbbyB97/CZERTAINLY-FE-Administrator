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

import type { CipherRequestData, RequestAttributeDto } from "./";

/**
 * @export
 * @interface CipherDataRequestDto
 */
export interface CipherDataRequestDto {
    /**
     * List of cipher Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof CipherDataRequestDto
     */
    cipherAttributes: Array<RequestAttributeDto>;
    /**
     * Encrypted/decrypted data
     * @type {Array<CipherRequestData>}
     * @memberof CipherDataRequestDto
     */
    cipherData: Array<CipherRequestData>;
}
