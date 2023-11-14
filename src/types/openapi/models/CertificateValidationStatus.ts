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

/**
 * Current validation status of the certificate
 * @export
 * @enum {string}
 */
export enum CertificateValidationStatus {
    NotChecked = "not_checked",
    Failed = "failed",
    Inactive = "inactive",
    Invalid = "invalid",
    Valid = "valid",
    Revoked = "revoked",
    Expiring = "expiring",
    Expired = "expired",
}
