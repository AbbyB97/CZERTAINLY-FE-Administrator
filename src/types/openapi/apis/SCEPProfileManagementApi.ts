// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.7.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from "rxjs";
import type { AjaxResponse } from "rxjs/ajax";
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from "../runtime";
import type { OperationOpts, HttpHeaders, HttpQuery } from "../runtime";
import type {
    AuthenticationServiceExceptionDto,
    BulkActionMessageDto,
    CertificateDto,
    ErrorMessageDto,
    ScepProfileDetailDto,
    ScepProfileDto,
    ScepProfileEditRequestDto,
    ScepProfileRequestDto,
} from "../models";

export interface BulkDeleteScepProfileRequest {
    requestBody: Array<string>;
}

export interface BulkDisableScepProfileRequest {
    requestBody: Array<string>;
}

export interface BulkEnableScepProfileRequest {
    requestBody: Array<string>;
}

export interface CreateScepProfileRequest {
    scepProfileRequestDto: ScepProfileRequestDto;
}

export interface DeleteScepProfileRequest {
    uuid: string;
}

export interface DisableScepProfileRequest {
    uuid: string;
}

export interface EditScepProfileRequest {
    uuid: string;
    scepProfileEditRequestDto: ScepProfileEditRequestDto;
}

export interface EnableScepProfileRequest {
    uuid: string;
}

export interface ForceDeleteScepProfilesRequest {
    requestBody: Array<string>;
}

export interface GetScepProfileRequest {
    uuid: string;
}

export interface ListScepCaCertificatesRequest {
    intuneEnabled: boolean;
}

export interface UpdateRaProfileRequest {
    uuid: string;
    raProfileUuid: string;
}

/**
 * no description
 */
export class SCEPProfileManagementApi extends BaseAPI {
    /**
     * Delete multiple SCEP Profiles
     */
    bulkDeleteScepProfile({ requestBody }: BulkDeleteScepProfileRequest): Observable<Array<BulkActionMessageDto>>;
    bulkDeleteScepProfile(
        { requestBody }: BulkDeleteScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<BulkActionMessageDto>>>;
    bulkDeleteScepProfile(
        { requestBody }: BulkDeleteScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<Array<BulkActionMessageDto> | AjaxResponse<Array<BulkActionMessageDto>>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "bulkDeleteScepProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<Array<BulkActionMessageDto>>(
            {
                url: "/v1/scepProfiles/delete",
                method: "DELETE",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Disable multiple SCEP Profile
     */
    bulkDisableScepProfile({ requestBody }: BulkDisableScepProfileRequest): Observable<void>;
    bulkDisableScepProfile({ requestBody }: BulkDisableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    bulkDisableScepProfile({ requestBody }: BulkDisableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "bulkDisableScepProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<void>(
            {
                url: "/v1/scepProfiles/disable",
                method: "PATCH",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Enable multiple SCEP Profiles
     */
    bulkEnableScepProfile({ requestBody }: BulkEnableScepProfileRequest): Observable<void>;
    bulkEnableScepProfile({ requestBody }: BulkEnableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    bulkEnableScepProfile({ requestBody }: BulkEnableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "bulkEnableScepProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<void>(
            {
                url: "/v1/scepProfiles/enable",
                method: "PATCH",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Create SCEP Profile
     */
    createScepProfile({ scepProfileRequestDto }: CreateScepProfileRequest): Observable<ScepProfileDetailDto>;
    createScepProfile(
        { scepProfileRequestDto }: CreateScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<ScepProfileDetailDto>>;
    createScepProfile(
        { scepProfileRequestDto }: CreateScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<ScepProfileDetailDto | AjaxResponse<ScepProfileDetailDto>> {
        throwIfNullOrUndefined(scepProfileRequestDto, "scepProfileRequestDto", "createScepProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<ScepProfileDetailDto>(
            {
                url: "/v1/scepProfiles",
                method: "POST",
                headers,
                body: scepProfileRequestDto,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Delete SCEP Profile
     */
    deleteScepProfile({ uuid }: DeleteScepProfileRequest): Observable<void>;
    deleteScepProfile({ uuid }: DeleteScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    deleteScepProfile({ uuid }: DeleteScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "deleteScepProfile");

        return this.request<void>(
            {
                url: "/v1/scepProfiles/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "DELETE",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Disable SCEP Profile
     */
    disableScepProfile({ uuid }: DisableScepProfileRequest): Observable<void>;
    disableScepProfile({ uuid }: DisableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    disableScepProfile({ uuid }: DisableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "disableScepProfile");

        return this.request<void>(
            {
                url: "/v1/scepProfiles/{uuid}/disable".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Edit SCEP Profile
     */
    editScepProfile({ uuid, scepProfileEditRequestDto }: EditScepProfileRequest): Observable<ScepProfileDetailDto>;
    editScepProfile(
        { uuid, scepProfileEditRequestDto }: EditScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<ScepProfileDetailDto>>;
    editScepProfile(
        { uuid, scepProfileEditRequestDto }: EditScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<ScepProfileDetailDto | AjaxResponse<ScepProfileDetailDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "editScepProfile");
        throwIfNullOrUndefined(scepProfileEditRequestDto, "scepProfileEditRequestDto", "editScepProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<ScepProfileDetailDto>(
            {
                url: "/v1/scepProfiles/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "PUT",
                headers,
                body: scepProfileEditRequestDto,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Enable SCEP Profile
     */
    enableScepProfile({ uuid }: EnableScepProfileRequest): Observable<void>;
    enableScepProfile({ uuid }: EnableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    enableScepProfile({ uuid }: EnableScepProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "enableScepProfile");

        return this.request<void>(
            {
                url: "/v1/scepProfiles/{uuid}/enable".replace("{uuid}", encodeURI(uuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Force delete multiple SCEP Profiles
     */
    forceDeleteScepProfiles({ requestBody }: ForceDeleteScepProfilesRequest): Observable<Array<BulkActionMessageDto>>;
    forceDeleteScepProfiles(
        { requestBody }: ForceDeleteScepProfilesRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<BulkActionMessageDto>>>;
    forceDeleteScepProfiles(
        { requestBody }: ForceDeleteScepProfilesRequest,
        opts?: OperationOpts,
    ): Observable<Array<BulkActionMessageDto> | AjaxResponse<Array<BulkActionMessageDto>>> {
        throwIfNullOrUndefined(requestBody, "requestBody", "forceDeleteScepProfiles");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<Array<BulkActionMessageDto>>(
            {
                url: "/v1/scepProfiles/delete/force",
                method: "DELETE",
                headers,
                body: requestBody,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get details of SCEP Profile
     */
    getScepProfile({ uuid }: GetScepProfileRequest): Observable<ScepProfileDetailDto>;
    getScepProfile({ uuid }: GetScepProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<ScepProfileDetailDto>>;
    getScepProfile(
        { uuid }: GetScepProfileRequest,
        opts?: OperationOpts,
    ): Observable<ScepProfileDetailDto | AjaxResponse<ScepProfileDetailDto>> {
        throwIfNullOrUndefined(uuid, "uuid", "getScepProfile");

        return this.request<ScepProfileDetailDto>(
            {
                url: "/v1/scepProfiles/{uuid}".replace("{uuid}", encodeURI(uuid)),
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get list of certificates eligible for CA certificate of SCEP requests
     */
    listScepCaCertificates({ intuneEnabled }: ListScepCaCertificatesRequest): Observable<Array<CertificateDto>>;
    listScepCaCertificates(
        { intuneEnabled }: ListScepCaCertificatesRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<CertificateDto>>>;
    listScepCaCertificates(
        { intuneEnabled }: ListScepCaCertificatesRequest,
        opts?: OperationOpts,
    ): Observable<Array<CertificateDto> | AjaxResponse<Array<CertificateDto>>> {
        throwIfNullOrUndefined(intuneEnabled, "intuneEnabled", "listScepCaCertificates");

        const query: HttpQuery = {
            // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            intuneEnabled: intuneEnabled,
        };

        return this.request<Array<CertificateDto>>(
            {
                url: "/v1/scepProfiles/caCertificates",
                method: "GET",
                query,
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get list of SCEP Profiles
     */
    listScepProfiles(): Observable<Array<ScepProfileDto>>;
    listScepProfiles(opts?: OperationOpts): Observable<AjaxResponse<Array<ScepProfileDto>>>;
    listScepProfiles(opts?: OperationOpts): Observable<Array<ScepProfileDto> | AjaxResponse<Array<ScepProfileDto>>> {
        return this.request<Array<ScepProfileDto>>(
            {
                url: "/v1/scepProfiles",
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Update RA Profile for SCEP Profile
     */
    updateRaProfile({ uuid, raProfileUuid }: UpdateRaProfileRequest): Observable<void>;
    updateRaProfile({ uuid, raProfileUuid }: UpdateRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>;
    updateRaProfile({ uuid, raProfileUuid }: UpdateRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, "uuid", "updateRaProfile");
        throwIfNullOrUndefined(raProfileUuid, "raProfileUuid", "updateRaProfile");

        return this.request<void>(
            {
                url: "/v1/scepProfiles/{uuid}/raProfiles/{raProfileUuid}"
                    .replace("{uuid}", encodeURI(uuid))
                    .replace("{raProfileUuid}", encodeURI(raProfileUuid)),
                method: "PATCH",
            },
            opts?.responseOpts,
        );
    }
}
