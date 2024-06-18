// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    GroupDto,
    KeyAssociationDto,
    KeyItemDetailDto,
    ResponseAttributeDto,
} from './';

/**
 * @export
 * @interface KeyDetailDto
 */
export interface KeyDetailDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof KeyDetailDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof KeyDetailDto
     */
    name: string;
    /**
     * Description of the Key
     * @type {string}
     * @memberof KeyDetailDto
     */
    description: string;
    /**
     * Creation time of the Key. If the key is discovered from the connector, then it will be returned
     * @type {string}
     * @memberof KeyDetailDto
     */
    creationTime: string;
    /**
     * UUID of the Token Profile
     * @type {string}
     * @memberof KeyDetailDto
     */
    tokenProfileUuid?: string;
    /**
     * Name of the Token Profile
     * @type {string}
     * @memberof KeyDetailDto
     */
    tokenProfileName?: string;
    /**
     * Token Instance UUID
     * @type {string}
     * @memberof KeyDetailDto
     */
    tokenInstanceUuid: string;
    /**
     * Token Instance Name
     * @type {string}
     * @memberof KeyDetailDto
     */
    tokenInstanceName: string;
    /**
     * Custom Attributes for the Cryptographic Key
     * @type {Array<ResponseAttributeDto>}
     * @memberof KeyDetailDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * Attributes for the Cryptographic Key
     * @type {Array<ResponseAttributeDto>}
     * @memberof KeyDetailDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * Owner of the Key
     * @type {string}
     * @memberof KeyDetailDto
     */
    owner?: string;
    /**
     * UUID of the owner of the Key
     * @type {string}
     * @memberof KeyDetailDto
     */
    ownerUuid?: string;
    /**
     * Groups associated to the key
     * @type {Array<GroupDto>}
     * @memberof KeyDetailDto
     */
    groups?: Array<GroupDto>;
    /**
     * Key Objects
     * @type {Array<KeyItemDetailDto>}
     * @memberof KeyDetailDto
     */
    items: Array<KeyItemDetailDto>;
    /**
     * List of associated items
     * @type {Array<KeyAssociationDto>}
     * @memberof KeyDetailDto
     */
    associations?: Array<KeyAssociationDto>;
}
