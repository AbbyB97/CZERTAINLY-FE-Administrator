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
    AcmeProfileDto,
    AcmeProfileEditRequestDto,
    AcmeProfileListDto,
    AcmeProfileRequestDto,
    AuthenticationServiceExceptionDto,
    BulkActionMessageDto,
    ErrorMessageDto,
    UuidDto,
} from "../models";

export interface BulkDeleteAcmeProfileRequest {
    requestBody: Array<string>;
}

export interface BulkDisableAcmeProfileRequest {
    requestBody: Array<string>;
}

export interface BulkEnableAcmeProfileRequest {
    requestBody: Array<string>;
}

export interface CreateAcmeProfileRequest {
    acmeProfileRequestDto: AcmeProfileRequestDto;
}

export interface DeleteAcmeProfileRequest {
    uuid: string;
}

export interface DisableAcmeProfileRequest {
    uuid: string;
}

export interface EditAcmeProfileRequest {
    uuid: string;
    acmeProfileEditRequestDto: AcmeProfileEditRequestDto;
}

export interface EnableAcmeProfileRequest {
    uuid: string;
}

export interface ForceDeleteACMEProfilesRequest {
    requestBody: Array<string>;
}

export interface GetAcmeProfileRequest {
    uuid: string;
}

export interface UpdateRaProfile1Request {
    uuid: string;
    raProfileUuid: string;
}

/**
 * no description
 */
export class ACMEProfileManagementApi extends BaseAPI {
    /**
     * Delete multiple ACME Profiles
     */
    bulkDeleteAcmeProfile({ requestBody }: BulkDeleteAcmeProfileRequest): Observable<Array<BulkActionMessageDto>>;
    bulkDeleteAcmeProfile(
        { requestBody }: BulkDeleteAcmeProfileRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<BulkActionMessageDto>>>;
    bulkDeleteAcmeProfile(
        { requestBody }: BulkDeleteAcmeProfileRequest,
        opts?: OperationOpts,
    ): Observable<Array<BulkActionMessageDto> | AjaxResponse<Array<BulkActionMessageDto>>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "bulkDeleteAcmeProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<Array<BulkActionMessageDto>>(
            {
                url: "/v1/acmeProfiles/delete",
                method: "DELETE",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Disable multiple ACME Profile
     */
    bulkDisableAcmeProfile({ requestBody }: BulkDisableAcmeProfileRequest): Observable<void>;
    bulkDisableAcmeProfile({ requestBody }: BulkDisableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    bulkDisableAcmeProfile({ requestBody }: BulkDisableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "bulkDisableAcmeProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<void>(
            {
                url: "/v1/acmeProfiles/disable",
                method: "PATCH",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Enable multiple ACME Profiles
     */
    bulkEnableAcmeProfile({ requestBody }: BulkEnableAcmeProfileRequest): Observable<void>;
    bulkEnableAcmeProfile({ requestBody }: BulkEnableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    bulkEnableAcmeProfile({ requestBody }: BulkEnableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "bulkEnableAcmeProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<void>(
            {
                url: "/v1/acmeProfiles/enable",
                method: "PATCH",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Create ACME Profile
     */
    createAcmeProfile({ acmeProfileRequestDto }: CreateAcmeProfileRequest): Observable<UuidDto>;
    createAcmeProfile({ acmeProfileRequestDto }: CreateAcmeProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<UuidDto>>;
    createAcmeProfile(
        { acmeProfileRequestDto }: CreateAcmeProfileRequest,
        opts?: OperationOpts,
    ): Observable<UuidDto | AjaxResponse<UuidDto>> {
        throwIfNullOrUndefined(acmeProfileRequestDto, "acmeProfileRequestDto", "createAcmeProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<UuidDto>(
            {
                url: "/v1/acmeProfiles",
                method: "POST",
                headers,
                body: acmeProfileRequestDto,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Delete ACME Profile
     */
    deleteAcmeProfile({ uuid }: DeleteAcmeProfileRequest): Observable<void>;
    deleteAcmeProfile({ uuid }: DeleteAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    deleteAcmeProfile({ uuid }: DeleteAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "deleteAcmeProfile");

        return this.request<void>(
            {
                url: "/v1/acmeProfiles/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "DELETE",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Disable ACME Profile
     */
    disableAcmeProfile({ uuid }: DisableAcmeProfileRequest): Observable<void>;
    disableAcmeProfile({ uuid }: DisableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    disableAcmeProfile({ uuid }: DisableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "disableAcmeProfile");

        return this.request<void>(
            {
                url: "/v1/acmeProfiles/{uuid}/disable".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Edit ACME Profile
     */
    editAcmeProfile({ uuid, acmeProfileEditRequestDto }: EditAcmeProfileRequest): Observable<AcmeProfileDto>;
    editAcmeProfile(
        { uuid, acmeProfileEditRequestDto }: EditAcmeProfileRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<AcmeProfileDto>>;
    editAcmeProfile(
        { uuid, acmeProfileEditRequestDto }: EditAcmeProfileRequest,
        opts?: OperationOpts,
    ): Observable<AcmeProfileDto | AjaxResponse<AcmeProfileDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "editAcmeProfile");
        throwIfNullOrUndefined(acmeProfileEditRequestDto, "acmeProfileEditRequestDto", "editAcmeProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<AcmeProfileDto>(
            {
                url: "/v1/acmeProfiles/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "PUT",
                headers,
                body: acmeProfileEditRequestDto,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Enable ACME Profile
     */
    enableAcmeProfile({ uuid }: EnableAcmeProfileRequest): Observable<void>;
    enableAcmeProfile({ uuid }: EnableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    enableAcmeProfile({ uuid }: EnableAcmeProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "enableAcmeProfile");

        return this.request<void>(
            {
                url: "/v1/acmeProfiles/{uuid}/enable".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Force delete multiple ACME Profiles
     */
    forceDeleteACMEProfiles({ requestBody }: ForceDeleteACMEProfilesRequest): Observable<Array<BulkActionMessageDto>>;
    forceDeleteACMEProfiles(
        { requestBody }: ForceDeleteACMEProfilesRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<BulkActionMessageDto>>>;
    forceDeleteACMEProfiles(
        { requestBody }: ForceDeleteACMEProfilesRequest,
        opts?: OperationOpts,
    ): Observable<Array<BulkActionMessageDto> | AjaxResponse<Array<BulkActionMessageDto>>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "forceDeleteACMEProfiles");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<Array<BulkActionMessageDto>>(
            {
                url: "/v1/acmeProfiles/delete/force",
                method: "DELETE",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get details of ACME Profile
     */
    getAcmeProfile({ uuid }: GetAcmeProfileRequest): Observable<AcmeProfileDto>;
    getAcmeProfile({ uuid }: GetAcmeProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<AcmeProfileDto>>;
    getAcmeProfile({ uuid }: GetAcmeProfileRequest, opts?: OperationOpts): Observable<AcmeProfileDto | AjaxResponse<AcmeProfileDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "getAcmeProfile");

        return this.request<AcmeProfileDto>(
            {
                url: "/v1/acmeProfiles/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get list of ACME Profiles
     */
    listAcmeProfiles(): Observable<Array<AcmeProfileListDto>>;
    listAcmeProfiles(opts?: OperationOpts): Observable<AjaxResponse<Array<AcmeProfileListDto>>>;
    listAcmeProfiles(opts?: OperationOpts): Observable<Array<AcmeProfileListDto> | AjaxResponse<Array<AcmeProfileListDto>>> {
        return this.request<Array<AcmeProfileListDto>>(
            {
                url: "/v1/acmeProfiles",
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Update RA Profile for ACME Profile
     */
    updateRaProfile1({ uuid, raProfileUuid }: UpdateRaProfile1Request): Observable<void>;
    updateRaProfile1({ uuid, raProfileUuid }: UpdateRaProfile1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    updateRaProfile1({ uuid, raProfileUuid }: UpdateRaProfile1Request, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "updateRaProfile1");
        throwIfNullOrUndefined(raProfileUuid, "raProfileUuid", "updateRaProfile1");

        return this.request<void>(
            {
                url: "/v1/acmeProfiles/{uuid}/raprofile/{raProfileUuid}"
                    .replace("{uuid}", encodeURI(uuid))
                    .replace("{raProfileUuid}", encodeURI(raProfileUuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }
}
