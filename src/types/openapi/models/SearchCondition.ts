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
 * Condition for the search
 * @export
 * @enum {string}
 */
export enum SearchCondition {
    Equals = "EQUALS",
    NotEquals = "NOT_EQUALS",
    Greater = "GREATER",
    GreaterOrEqual = "GREATER_OR_EQUAL",
    Lesser = "LESSER",
    LesserOrEqual = "LESSER_OR_EQUAL",
    Contains = "CONTAINS",
    NotContains = "NOT_CONTAINS",
    StartsWith = "STARTS_WITH",
    EndsWith = "ENDS_WITH",
    Empty = "EMPTY",
    NotEmpty = "NOT_EMPTY",
    Success = "SUCCESS",
    Failed = "FAILED",
    Unknown = "UNKNOWN",
    NotChecked = "NOT_CHECKED",
}
