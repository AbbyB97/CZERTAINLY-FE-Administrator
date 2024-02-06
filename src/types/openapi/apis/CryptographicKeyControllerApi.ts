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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    AuthenticationServiceExceptionDto,
    BaseAttributeDto,
    BulkCompromiseKeyItemRequestDto,
    BulkCompromiseKeyRequestDto,
    BulkKeyItemUsageRequestDto,
    BulkKeyUsageRequestDto,
    CompromiseKeyRequestDto,
    CryptographicKeyResponseDto,
    EditKeyRequestDto,
    ErrorMessageDto,
    KeyDetailDto,
    KeyDto,
    KeyEventHistoryDto,
    KeyItemDetailDto,
    KeyRequestDto,
    KeyRequestType,
    SearchFieldDataByGroupDto,
    SearchRequestDto,
    UpdateKeyUsageRequestDto,
} from '../models';

export interface CompromiseKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
    compromiseKeyRequestDto: CompromiseKeyRequestDto;
}

export interface CompromiseKeyItemsRequest {
    bulkCompromiseKeyItemRequestDto: BulkCompromiseKeyItemRequestDto;
}

export interface CompromiseKeysRequest {
    bulkCompromiseKeyRequestDto: BulkCompromiseKeyRequestDto;
}

export interface CreateKeyRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    type: KeyRequestType;
    keyRequestDto: KeyRequestDto;
}

export interface DeleteKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
    requestBody?: Array<string>;
}

export interface DeleteKeyItemsRequest {
    requestBody: Array<string>;
}

export interface DeleteKeysRequest {
    requestBody: Array<string>;
}

export interface DestroyKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
    requestBody?: Array<string>;
}

export interface DestroyKeyItemsRequest {
    requestBody: Array<string>;
}

export interface DestroyKeysRequest {
    requestBody: Array<string>;
}

export interface DisableKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
    requestBody?: Array<string>;
}

export interface DisableKeyItemsRequest {
    requestBody: Array<string>;
}

export interface DisableKeysRequest {
    requestBody: Array<string>;
}

export interface EditKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
    editKeyRequestDto: EditKeyRequestDto;
}

export interface EnableKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
    requestBody?: Array<string>;
}

export interface EnableKeyItemsRequest {
    requestBody: Array<string>;
}

export interface EnableKeysRequest {
    requestBody: Array<string>;
}

export interface GetEventHistoryRequest {
    tokenInstanceUuid: string;
    uuid: string;
    keyItemUuid: string;
}

export interface GetKeyRequest {
    tokenInstanceUuid: string;
    uuid: string;
}

export interface GetKeyItemRequest {
    tokenInstanceUuid: string;
    uuid: string;
    keyItemUuid: string;
}

export interface ListCreateKeyAttributesRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    type: KeyRequestType;
}

export interface ListCryptographicKeysRequest {
    searchRequestDto: SearchRequestDto;
}

export interface ListKeyPairsRequest {
    tokenProfileUuid?: string;
}

export interface SyncKeysRequest {
    tokenInstanceUuid: string;
}

export interface UpdateKeyItemUsagesRequest {
    bulkKeyItemUsageRequestDto: BulkKeyItemUsageRequestDto;
}

export interface UpdateKeyUsages1Request {
    tokenInstanceUuid: string;
    uuid: string;
    updateKeyUsageRequestDto: UpdateKeyUsageRequestDto;
}

export interface UpdateKeysUsages1Request {
    bulkKeyUsageRequestDto: BulkKeyUsageRequestDto;
}

/**
 * no description
 */
export class CryptographicKeyControllerApi extends BaseAPI {

    /**
     * If the request body is provided with the UUID of the items of Key, then only those itemswill be compromised. Else all the sub items of the key will be compromised
     * Mark Key and its Items as Compromised
     */
    compromiseKey({ tokenInstanceUuid, uuid, compromiseKeyRequestDto }: CompromiseKeyRequest): Observable<void>
    compromiseKey({ tokenInstanceUuid, uuid, compromiseKeyRequestDto }: CompromiseKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    compromiseKey({ tokenInstanceUuid, uuid, compromiseKeyRequestDto }: CompromiseKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'compromiseKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'compromiseKey');
        throwIfNullOrUndefined(compromiseKeyRequestDto, 'compromiseKeyRequestDto', 'compromiseKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/compromise'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: compromiseKeyRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * This API can be used to mark multiple keys items to be marked as compromised.
     * Mark Multiple Key Items as Compromised
     */
    compromiseKeyItems({ bulkCompromiseKeyItemRequestDto }: CompromiseKeyItemsRequest): Observable<void>
    compromiseKeyItems({ bulkCompromiseKeyItemRequestDto }: CompromiseKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    compromiseKeyItems({ bulkCompromiseKeyItemRequestDto }: CompromiseKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(bulkCompromiseKeyItemRequestDto, 'bulkCompromiseKeyItemRequestDto', 'compromiseKeyItems');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/items/compromise',
            method: 'PATCH',
            headers,
            body: bulkCompromiseKeyItemRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * This API can be used to mark multiple keys and its sub items to be marked as compromised.Specific part of the key cannot be mentioned in this API
     * Mark Multiple Key and all its Items as Compromised
     */
    compromiseKeys({ bulkCompromiseKeyRequestDto }: CompromiseKeysRequest): Observable<void>
    compromiseKeys({ bulkCompromiseKeyRequestDto }: CompromiseKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    compromiseKeys({ bulkCompromiseKeyRequestDto }: CompromiseKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(bulkCompromiseKeyRequestDto, 'bulkCompromiseKeyRequestDto', 'compromiseKeys');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/compromise',
            method: 'PATCH',
            headers,
            body: bulkCompromiseKeyRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Create a new Cryptographic Key
     */
    createKey({ tokenInstanceUuid, tokenProfileUuid, type, keyRequestDto }: CreateKeyRequest): Observable<KeyDetailDto>
    createKey({ tokenInstanceUuid, tokenProfileUuid, type, keyRequestDto }: CreateKeyRequest, opts?: OperationOpts): Observable<AjaxResponse<KeyDetailDto>>
    createKey({ tokenInstanceUuid, tokenProfileUuid, type, keyRequestDto }: CreateKeyRequest, opts?: OperationOpts): Observable<KeyDetailDto | AjaxResponse<KeyDetailDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'createKey');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'createKey');
        throwIfNullOrUndefined(type, 'type', 'createKey');
        throwIfNullOrUndefined(keyRequestDto, 'keyRequestDto', 'createKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<KeyDetailDto>({
            url: '/v1/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{type}'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{type}', encodeURI(type)),
            method: 'POST',
            headers,
            body: keyRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * If the request body provided, only those key items will be deleted. If the request body is not provided or given empty, then the entire key will be destroyed
     * Delete Cryptographic Key
     */
    deleteKey({ tokenInstanceUuid, uuid, requestBody }: DeleteKeyRequest): Observable<void>
    deleteKey({ tokenInstanceUuid, uuid, requestBody }: DeleteKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteKey({ tokenInstanceUuid, uuid, requestBody }: DeleteKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'deleteKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'deleteKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'DELETE',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Delete Multiple Cryptographic Key Items
     */
    deleteKeyItems({ requestBody }: DeleteKeyItemsRequest): Observable<void>
    deleteKeyItems({ requestBody }: DeleteKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteKeyItems({ requestBody }: DeleteKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'deleteKeyItems');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/items',
            method: 'DELETE',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Delete Multiple Cryptographic Key
     */
    deleteKeys({ requestBody }: DeleteKeysRequest): Observable<void>
    deleteKeys({ requestBody }: DeleteKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteKeys({ requestBody }: DeleteKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'deleteKeys');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys',
            method: 'DELETE',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * If the request body provided, only those key items will be destroyed. If the request body is not provided or given empty, then the entire key will be destroyed
     * Destroy Cryptographic Key
     */
    destroyKey({ tokenInstanceUuid, uuid, requestBody }: DestroyKeyRequest): Observable<void>
    destroyKey({ tokenInstanceUuid, uuid, requestBody }: DestroyKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    destroyKey({ tokenInstanceUuid, uuid, requestBody }: DestroyKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'destroyKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'destroyKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/destroy'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Destroy Multiple Cryptographic Key items
     */
    destroyKeyItems({ requestBody }: DestroyKeyItemsRequest): Observable<void>
    destroyKeyItems({ requestBody }: DestroyKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    destroyKeyItems({ requestBody }: DestroyKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'destroyKeyItems');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/items/destroy',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Destroy Multiple Cryptographic Key and its items
     */
    destroyKeys({ requestBody }: DestroyKeysRequest): Observable<void>
    destroyKeys({ requestBody }: DestroyKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    destroyKeys({ requestBody }: DestroyKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'destroyKeys');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/destroy',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * If the request body provided, only those key items will be disabled. If the request body is not provided or given empty, then the entire key will be disabled
     * Disable Key
     */
    disableKey({ tokenInstanceUuid, uuid, requestBody }: DisableKeyRequest): Observable<void>
    disableKey({ tokenInstanceUuid, uuid, requestBody }: DisableKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    disableKey({ tokenInstanceUuid, uuid, requestBody }: DisableKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'disableKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'disableKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/disable'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Disable multiple Key Items
     */
    disableKeyItems({ requestBody }: DisableKeyItemsRequest): Observable<void>
    disableKeyItems({ requestBody }: DisableKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    disableKeyItems({ requestBody }: DisableKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'disableKeyItems');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/items/disable',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Disable multiple Keys
     */
    disableKeys({ requestBody }: DisableKeysRequest): Observable<void>
    disableKeys({ requestBody }: DisableKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    disableKeys({ requestBody }: DisableKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'disableKeys');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/disable',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Edit Key
     */
    editKey({ tokenInstanceUuid, uuid, editKeyRequestDto }: EditKeyRequest): Observable<KeyDetailDto>
    editKey({ tokenInstanceUuid, uuid, editKeyRequestDto }: EditKeyRequest, opts?: OperationOpts): Observable<AjaxResponse<KeyDetailDto>>
    editKey({ tokenInstanceUuid, uuid, editKeyRequestDto }: EditKeyRequest, opts?: OperationOpts): Observable<KeyDetailDto | AjaxResponse<KeyDetailDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'editKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'editKey');
        throwIfNullOrUndefined(editKeyRequestDto, 'editKeyRequestDto', 'editKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<KeyDetailDto>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'PUT',
            headers,
            body: editKeyRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * If the request body provided, only those key items will be enabled. If the request body is not provided or given empty, then the entire key will be enabled
     * Enable Key
     */
    enableKey({ tokenInstanceUuid, uuid, requestBody }: EnableKeyRequest): Observable<void>
    enableKey({ tokenInstanceUuid, uuid, requestBody }: EnableKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    enableKey({ tokenInstanceUuid, uuid, requestBody }: EnableKeyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'enableKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'enableKey');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/enable'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Enable multiple Key Items
     */
    enableKeyItems({ requestBody }: EnableKeyItemsRequest): Observable<void>
    enableKeyItems({ requestBody }: EnableKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    enableKeyItems({ requestBody }: EnableKeyItemsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'enableKeyItems');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/items/enable',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Enable multiple Keys
     */
    enableKeys({ requestBody }: EnableKeysRequest): Observable<void>
    enableKeys({ requestBody }: EnableKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    enableKeys({ requestBody }: EnableKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'enableKeys');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/enable',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Get Key Item event history
     */
    getEventHistory({ tokenInstanceUuid, uuid, keyItemUuid }: GetEventHistoryRequest): Observable<Array<KeyEventHistoryDto>>
    getEventHistory({ tokenInstanceUuid, uuid, keyItemUuid }: GetEventHistoryRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<KeyEventHistoryDto>>>
    getEventHistory({ tokenInstanceUuid, uuid, keyItemUuid }: GetEventHistoryRequest, opts?: OperationOpts): Observable<Array<KeyEventHistoryDto> | AjaxResponse<Array<KeyEventHistoryDto>>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'getEventHistory');
        throwIfNullOrUndefined(uuid, 'uuid', 'getEventHistory');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'getEventHistory');

        return this.request<Array<KeyEventHistoryDto>>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/items/{keyItemUuid}/history'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Cryptographic Key Detail
     */
    getKey({ tokenInstanceUuid, uuid }: GetKeyRequest): Observable<KeyDetailDto>
    getKey({ tokenInstanceUuid, uuid }: GetKeyRequest, opts?: OperationOpts): Observable<AjaxResponse<KeyDetailDto>>
    getKey({ tokenInstanceUuid, uuid }: GetKeyRequest, opts?: OperationOpts): Observable<KeyDetailDto | AjaxResponse<KeyDetailDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'getKey');
        throwIfNullOrUndefined(uuid, 'uuid', 'getKey');

        return this.request<KeyDetailDto>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Cryptographic Key Detail
     */
    getKeyItem({ tokenInstanceUuid, uuid, keyItemUuid }: GetKeyItemRequest): Observable<KeyItemDetailDto>
    getKeyItem({ tokenInstanceUuid, uuid, keyItemUuid }: GetKeyItemRequest, opts?: OperationOpts): Observable<AjaxResponse<KeyItemDetailDto>>
    getKeyItem({ tokenInstanceUuid, uuid, keyItemUuid }: GetKeyItemRequest, opts?: OperationOpts): Observable<KeyItemDetailDto | AjaxResponse<KeyItemDetailDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'getKeyItem');
        throwIfNullOrUndefined(uuid, 'uuid', 'getKeyItem');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'getKeyItem');

        return this.request<KeyItemDetailDto>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/items/{keyItemUuid}'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get CryptographicKey searchable fields information
     */
    getSearchableFieldInformation1(): Observable<Array<SearchFieldDataByGroupDto>>
    getSearchableFieldInformation1(opts?: OperationOpts): Observable<AjaxResponse<Array<SearchFieldDataByGroupDto>>>
    getSearchableFieldInformation1(opts?: OperationOpts): Observable<Array<SearchFieldDataByGroupDto> | AjaxResponse<Array<SearchFieldDataByGroupDto>>> {
        return this.request<Array<SearchFieldDataByGroupDto>>({
            url: '/v1/keys/search',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List of Attributes to create a Key
     */
    listCreateKeyAttributes({ tokenInstanceUuid, tokenProfileUuid, type }: ListCreateKeyAttributesRequest): Observable<Array<BaseAttributeDto>>
    listCreateKeyAttributes({ tokenInstanceUuid, tokenProfileUuid, type }: ListCreateKeyAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listCreateKeyAttributes({ tokenInstanceUuid, tokenProfileUuid, type }: ListCreateKeyAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'listCreateKeyAttributes');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'listCreateKeyAttributes');
        throwIfNullOrUndefined(type, 'type', 'listCreateKeyAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{type}/attributes'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{type}', encodeURI(type)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List cryptographic keys
     */
    listCryptographicKeys({ searchRequestDto }: ListCryptographicKeysRequest): Observable<CryptographicKeyResponseDto>
    listCryptographicKeys({ searchRequestDto }: ListCryptographicKeysRequest, opts?: OperationOpts): Observable<AjaxResponse<CryptographicKeyResponseDto>>
    listCryptographicKeys({ searchRequestDto }: ListCryptographicKeysRequest, opts?: OperationOpts): Observable<CryptographicKeyResponseDto | AjaxResponse<CryptographicKeyResponseDto>> {
        throwIfNullOrUndefined(searchRequestDto, 'searchRequestDto', 'listCryptographicKeys');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<CryptographicKeyResponseDto>({
            url: '/v1/keys',
            method: 'POST',
            headers,
            body: searchRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * This API contains the logic to get the keys that contains the full key pair (private and public Key)
     * List Cryptographic Keys with full Key Pairs
     */
    listKeyPairs({ tokenProfileUuid }: ListKeyPairsRequest): Observable<Array<KeyDto>>
    listKeyPairs({ tokenProfileUuid }: ListKeyPairsRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<KeyDto>>>
    listKeyPairs({ tokenProfileUuid }: ListKeyPairsRequest, opts?: OperationOpts): Observable<Array<KeyDto> | AjaxResponse<Array<KeyDto>>> {

        const query: HttpQuery = {};

        if (tokenProfileUuid != null) { query['tokenProfileUuid'] = tokenProfileUuid; }

        return this.request<Array<KeyDto>>({
            url: '/v1/keys/pairs',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Sync Keys from connector
     */
    syncKeys({ tokenInstanceUuid }: SyncKeysRequest): Observable<void>
    syncKeys({ tokenInstanceUuid }: SyncKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    syncKeys({ tokenInstanceUuid }: SyncKeysRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'syncKeys');

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/sync'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Update the key usages for multiple keys Items
     * Update Key Usages for Multiple Key Items
     */
    updateKeyItemUsages({ bulkKeyItemUsageRequestDto }: UpdateKeyItemUsagesRequest): Observable<void>
    updateKeyItemUsages({ bulkKeyItemUsageRequestDto }: UpdateKeyItemUsagesRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    updateKeyItemUsages({ bulkKeyItemUsageRequestDto }: UpdateKeyItemUsagesRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(bulkKeyItemUsageRequestDto, 'bulkKeyItemUsageRequestDto', 'updateKeyItemUsages');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/items/usages',
            method: 'PUT',
            headers,
            body: bulkKeyItemUsageRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * If the request body provided, only those key items will be updated. If the request body is not provided or given empty, then the entire key will be updated
     * Update Key Usage
     */
    updateKeyUsages1({ tokenInstanceUuid, uuid, updateKeyUsageRequestDto }: UpdateKeyUsages1Request): Observable<void>
    updateKeyUsages1({ tokenInstanceUuid, uuid, updateKeyUsageRequestDto }: UpdateKeyUsages1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    updateKeyUsages1({ tokenInstanceUuid, uuid, updateKeyUsageRequestDto }: UpdateKeyUsages1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'updateKeyUsages1');
        throwIfNullOrUndefined(uuid, 'uuid', 'updateKeyUsages1');
        throwIfNullOrUndefined(updateKeyUsageRequestDto, 'updateKeyUsageRequestDto', 'updateKeyUsages1');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/tokens/{tokenInstanceUuid}/keys/{uuid}/usages'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{uuid}', encodeURI(uuid)),
            method: 'PUT',
            headers,
            body: updateKeyUsageRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Update the key usages for multiple keys and all the items inside it
     * Update Key Usages for Multiple Keys
     */
    updateKeysUsages1({ bulkKeyUsageRequestDto }: UpdateKeysUsages1Request): Observable<void>
    updateKeysUsages1({ bulkKeyUsageRequestDto }: UpdateKeysUsages1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    updateKeysUsages1({ bulkKeyUsageRequestDto }: UpdateKeysUsages1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(bulkKeyUsageRequestDto, 'bulkKeyUsageRequestDto', 'updateKeysUsages1');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/keys/usages',
            method: 'PUT',
            headers,
            body: bulkKeyUsageRequestDto,
        }, opts?.responseOpts);
    };

}
