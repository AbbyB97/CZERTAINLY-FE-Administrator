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
    ApprovalStepRequestDto,
} from './';

/**
 * @export
 * @interface ApprovalProfileUpdateRequestDto
 */
export interface ApprovalProfileUpdateRequestDto {
    /**
     * Description of the Approval profile
     * @type {string}
     * @memberof ApprovalProfileUpdateRequestDto
     */
    description?: string;
    /**
     * Expiration of the Approval profile in hours
     * @type {number}
     * @memberof ApprovalProfileUpdateRequestDto
     */
    expiry?: number;
    /**
     * List of Approval steps for the Approval profile
     * @type {Array<ApprovalStepRequestDto>}
     * @memberof ApprovalProfileUpdateRequestDto
     */
    approvalSteps: Array<ApprovalStepRequestDto>;
}
