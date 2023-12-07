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

import type { Observable } from "rxjs";
import type { AjaxResponse } from "rxjs/ajax";
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from "../runtime";
import type { OperationOpts, HttpHeaders } from "../runtime";
import type {
    AuthenticationServiceExceptionDto,
    BaseAttributeDto,
    ErrorMessageDto,
    RequestAttributeDto,
    TokenInstanceDetailDto,
    TokenInstanceDto,
    TokenInstanceRequestDto,
} from "../models";

export interface ActivateTokenInstanceRequest {
    uuid: string;
    requestAttributeDto: Array<RequestAttributeDto>;
}

export interface CreateTokenInstanceRequest {
    tokenInstanceRequestDto: TokenInstanceRequestDto;
}

export interface DeactivateTokenInstanceRequest {
    uuid: string;
}

export interface DeleteTokenInstanceRequest {
    uuid: string;
}

export interface DeleteTokenInstance1Request {
    requestBody: Array<string>;
}

export interface GetTokenInstanceRequest {
    uuid: string;
}

export interface ListTokenInstanceActivationAttributesRequest {
    uuid: string;
}

export interface ListTokenProfileAttributesRequest {
    uuid: string;
}

export interface ReloadStatusRequest {
    uuid: string;
}

export interface UpdateTokenInstanceRequest {
    uuid: string;
    tokenInstanceRequestDto: TokenInstanceRequestDto;
}

/**
 * no description
 */
export class TokenInstanceControllerApi extends BaseAPI {
    /**
     * Activate Token Instance
     */
    activateTokenInstance({ uuid, requestAttributeDto }: ActivateTokenInstanceRequest): Observable<void>;
    activateTokenInstance(
        { uuid, requestAttributeDto }: ActivateTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<void | AjaxResponse<void>>;
    activateTokenInstance(
        { uuid, requestAttributeDto }: ActivateTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "activateTokenInstance");
        throwIfNullOrUndefined(requestAttributeDto, "requestAttributeDto", "activateTokenInstance");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<void>(
            {
                url: "/v1/tokens/{uuid}/activate".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
                headers,
                body: requestAttributeDto,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Create a new Token Instance
     */
    createTokenInstance({ tokenInstanceRequestDto }: CreateTokenInstanceRequest): Observable<TokenInstanceDetailDto>;
    createTokenInstance(
        { tokenInstanceRequestDto }: CreateTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<TokenInstanceDetailDto>>;
    createTokenInstance(
        { tokenInstanceRequestDto }: CreateTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<TokenInstanceDetailDto | AjaxResponse<TokenInstanceDetailDto>> {
        throwIfNullOrUndefined(tokenInstanceRequestDto, "tokenInstanceRequestDto", "createTokenInstance");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<TokenInstanceDetailDto>(
            {
                url: "/v1/tokens",
                method: "POST",
                headers,
                body: tokenInstanceRequestDto,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Deactivate Token Instance
     */
    deactivateTokenInstance({ uuid }: DeactivateTokenInstanceRequest): Observable<void>;
    deactivateTokenInstance({ uuid }: DeactivateTokenInstanceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    deactivateTokenInstance({ uuid }: DeactivateTokenInstanceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "deactivateTokenInstance");

        return this.request<void>(
            {
                url: "/v1/tokens/{uuid}/deactivate".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Delete Token Instance
     */
    deleteTokenInstance({ uuid }: DeleteTokenInstanceRequest): Observable<void>;
    deleteTokenInstance({ uuid }: DeleteTokenInstanceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    deleteTokenInstance({ uuid }: DeleteTokenInstanceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "deleteTokenInstance");

        return this.request<void>(
            {
                url: "/v1/tokens/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "DELETE",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Delete multiple Token Instance
     */
    deleteTokenInstance1({ requestBody }: DeleteTokenInstance1Request): Observable<void>;
    deleteTokenInstance1({ requestBody }: DeleteTokenInstance1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    deleteTokenInstance1({ requestBody }: DeleteTokenInstance1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "deleteTokenInstance1");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<void>(
            {
                url: "/v1/tokens/delete",
                method: "DELETE",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get Token Instance Detail
     */
    getTokenInstance({ uuid }: GetTokenInstanceRequest): Observable<TokenInstanceDetailDto>;
    getTokenInstance({ uuid }: GetTokenInstanceRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenInstanceDetailDto>>;
    getTokenInstance(
        { uuid }: GetTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<TokenInstanceDetailDto | AjaxResponse<TokenInstanceDetailDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "getTokenInstance");

        return this.request<TokenInstanceDetailDto>(
            {
                url: "/v1/tokens/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * List Token activation Attributes
     */
    listTokenInstanceActivationAttributes({ uuid }: ListTokenInstanceActivationAttributesRequest): Observable<Array<BaseAttributeDto>>;
    listTokenInstanceActivationAttributes(
        { uuid }: ListTokenInstanceActivationAttributesRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<BaseAttributeDto>>>;
    listTokenInstanceActivationAttributes(
        { uuid }: ListTokenInstanceActivationAttributesRequest,
        opts?: OperationOpts,
    ): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(uuid, "uuid", "listTokenInstanceActivationAttributes");

        return this.request<Array<BaseAttributeDto>>(
            {
                url: "/v1/tokens/{uuid}/activate/attributes".replace("{uuid}", encodeURI(uuid)),
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * List Token Instances
     */
    listTokenInstances(): Observable<Array<TokenInstanceDto>>;
    listTokenInstances(opts?: OperationOpts): Observable<AjaxResponse<Array<TokenInstanceDto>>>;
    listTokenInstances(opts?: OperationOpts): Observable<Array<TokenInstanceDto> | AjaxResponse<Array<TokenInstanceDto>>> {
        return this.request<Array<TokenInstanceDto>>(
            {
                url: "/v1/tokens",
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * List Token Profile Attributes
     */
    listTokenProfileAttributes({ uuid }: ListTokenProfileAttributesRequest): Observable<Array<BaseAttributeDto>>;
    listTokenProfileAttributes(
        { uuid }: ListTokenProfileAttributesRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<BaseAttributeDto>>>;
    listTokenProfileAttributes(
        { uuid }: ListTokenProfileAttributesRequest,
        opts?: OperationOpts,
    ): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(uuid, "uuid", "listTokenProfileAttributes");

        return this.request<Array<BaseAttributeDto>>(
            {
                url: "/v1/tokens/{uuid}/tokenProfiles/attributes".replace("{uuid}", encodeURI(uuid)),
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Reload Token Instance status
     */
    reloadStatus({ uuid }: ReloadStatusRequest): Observable<TokenInstanceDetailDto>;
    reloadStatus({ uuid }: ReloadStatusRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenInstanceDetailDto>>;
    reloadStatus(
        { uuid }: ReloadStatusRequest,
        opts?: OperationOpts,
    ): Observable<TokenInstanceDetailDto | AjaxResponse<TokenInstanceDetailDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "reloadStatus");

        return this.request<TokenInstanceDetailDto>(
            {
                url: "/v1/tokens/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Update Token Instance
     */
    updateTokenInstance({ uuid, tokenInstanceRequestDto }: UpdateTokenInstanceRequest): Observable<TokenInstanceDetailDto>;
    updateTokenInstance(
        { uuid, tokenInstanceRequestDto }: UpdateTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<TokenInstanceDetailDto>>;
    updateTokenInstance(
        { uuid, tokenInstanceRequestDto }: UpdateTokenInstanceRequest,
        opts?: OperationOpts,
    ): Observable<TokenInstanceDetailDto | AjaxResponse<TokenInstanceDetailDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "updateTokenInstance");
        throwIfNullOrUndefined(tokenInstanceRequestDto, "tokenInstanceRequestDto", "updateTokenInstance");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<TokenInstanceDetailDto>(
            {
                url: "/v1/tokens/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "PUT",
                headers,
                body: tokenInstanceRequestDto,
            },
            opts?.responseOpts,
        );
    }
}
