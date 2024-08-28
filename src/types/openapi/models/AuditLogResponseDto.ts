// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    AuditLogDto,
} from './';

/**
 * @export
 * @interface AuditLogResponseDto
 */
export interface AuditLogResponseDto {
    /**
     * Number of entries per page
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    itemsPerPage: number;
    /**
     * Page number for the request
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    pageNumber: number;
    /**
     * Number of pages available
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    totalPages: number;
    /**
     * Number of items available
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    totalItems: number;
    /**
     * Audit log items
     * @type {Array<AuditLogDto>}
     * @memberof AuditLogResponseDto
     */
    items: Array<AuditLogDto>;
}
