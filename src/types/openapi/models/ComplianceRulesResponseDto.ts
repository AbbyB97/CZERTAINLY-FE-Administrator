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
    BaseAttributeDto,
    CertificateType,
} from './';

/**
 * Rules from Compliance Provider
 * @export
 * @interface ComplianceRulesResponseDto
 */
export interface ComplianceRulesResponseDto {
    /**
     * UUID of the rule
     * @type {string}
     * @memberof ComplianceRulesResponseDto
     */
    uuid: string;
    /**
     * UUID of the group to which the rule belongs to
     * @type {string}
     * @memberof ComplianceRulesResponseDto
     */
    groupUuid?: string;
    /**
     * Name of the rule
     * @type {string}
     * @memberof ComplianceRulesResponseDto
     */
    name: string;
    /**
     * @type {CertificateType}
     * @memberof ComplianceRulesResponseDto
     */
    certificateType: CertificateType;
    /**
     * Rule attributes
     * @type {Array<BaseAttributeDto>}
     * @memberof ComplianceRulesResponseDto
     */
    attributes?: Array<BaseAttributeDto>;
    /**
     * Description of the rule
     * @type {string}
     * @memberof ComplianceRulesResponseDto
     */
    description?: string;
}


