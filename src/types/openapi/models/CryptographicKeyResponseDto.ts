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

import type { KeyItemDto } from "./";

/**
 * @export
 * @interface CryptographicKeyResponseDto
 */
export interface CryptographicKeyResponseDto {
    /**
     * Cryptographic Keys
     * @type {Array<KeyItemDto>}
     * @memberof CryptographicKeyResponseDto
     */
    cryptographicKeys: Array<KeyItemDto>;
    /**
     * Number of entries per page
     * @type {number}
     * @memberof CryptographicKeyResponseDto
     */
    itemsPerPage: number;
    /**
     * Page number for the request
     * @type {number}
     * @memberof CryptographicKeyResponseDto
     */
    pageNumber: number;
    /**
     * Number of pages available
     * @type {number}
     * @memberof CryptographicKeyResponseDto
     */
    totalPages: number;
    /**
     * Number of items available
     * @type {number}
     * @memberof CryptographicKeyResponseDto
     */
    totalItems: number;
}
