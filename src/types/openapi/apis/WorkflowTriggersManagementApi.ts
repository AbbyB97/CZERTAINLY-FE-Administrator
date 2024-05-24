// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.11.1-SNAPSHOT
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
    Resource,
    TriggerDetailDto,
    TriggerDto,
    TriggerHistoryDto,
    TriggerRequestDto,
    UpdateTriggerRequestDto,
} from '../models';

export interface CreateTriggerRequest {
    triggerRequestDto: TriggerRequestDto;
}

export interface DeleteTriggerRequest {
    triggerUuid: string;
}

export interface GetTriggerRequest {
    triggerUuid: string;
}

export interface GetTriggerHistoryRequest {
    triggerUuid: string;
    triggerObjectUuid: string;
}

export interface ListTriggersRequest {
    resource?: Resource;
    eventResource?: Resource;
}

export interface UpdateTriggerRequest {
    triggerUuid: string;
    updateTriggerRequestDto: UpdateTriggerRequestDto;
}

/**
 * no description
 */
export class WorkflowTriggersManagementApi extends BaseAPI {

    /**
     * Create Trigger
     */
    createTrigger({ triggerRequestDto }: CreateTriggerRequest): Observable<TriggerDetailDto>
    createTrigger({ triggerRequestDto }: CreateTriggerRequest, opts?: OperationOpts): Observable<AjaxResponse<TriggerDetailDto>>
    createTrigger({ triggerRequestDto }: CreateTriggerRequest, opts?: OperationOpts): Observable<TriggerDetailDto | AjaxResponse<TriggerDetailDto>> {
        throwIfNullOrUndefined(triggerRequestDto, 'triggerRequestDto', 'createTrigger');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<TriggerDetailDto>({
            url: '/v1/workflows/triggers',
            method: 'POST',
            headers,
            body: triggerRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Delete Trigger
     */
    deleteTrigger({ triggerUuid }: DeleteTriggerRequest): Observable<void>
    deleteTrigger({ triggerUuid }: DeleteTriggerRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteTrigger({ triggerUuid }: DeleteTriggerRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(triggerUuid, 'triggerUuid', 'deleteTrigger');

        return this.request<void>({
            url: '/v1/workflows/triggers/{triggerUuid}'.replace('{triggerUuid}', encodeURI(triggerUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Get Trigger details
     */
    getTrigger({ triggerUuid }: GetTriggerRequest): Observable<TriggerDetailDto>
    getTrigger({ triggerUuid }: GetTriggerRequest, opts?: OperationOpts): Observable<AjaxResponse<TriggerDetailDto>>
    getTrigger({ triggerUuid }: GetTriggerRequest, opts?: OperationOpts): Observable<TriggerDetailDto | AjaxResponse<TriggerDetailDto>> {
        throwIfNullOrUndefined(triggerUuid, 'triggerUuid', 'getTrigger');

        return this.request<TriggerDetailDto>({
            url: '/v1/workflows/triggers/{triggerUuid}'.replace('{triggerUuid}', encodeURI(triggerUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Trigger History
     */
    getTriggerHistory({ triggerUuid, triggerObjectUuid }: GetTriggerHistoryRequest): Observable<Array<TriggerHistoryDto>>
    getTriggerHistory({ triggerUuid, triggerObjectUuid }: GetTriggerHistoryRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<TriggerHistoryDto>>>
    getTriggerHistory({ triggerUuid, triggerObjectUuid }: GetTriggerHistoryRequest, opts?: OperationOpts): Observable<Array<TriggerHistoryDto> | AjaxResponse<Array<TriggerHistoryDto>>> {
        throwIfNullOrUndefined(triggerUuid, 'triggerUuid', 'getTriggerHistory');
        throwIfNullOrUndefined(triggerObjectUuid, 'triggerObjectUuid', 'getTriggerHistory');

        return this.request<Array<TriggerHistoryDto>>({
            url: '/v1/workflows/triggers/{triggerUuid}/history/{triggerObjectUuid}'.replace('{triggerUuid}', encodeURI(triggerUuid)).replace('{triggerObjectUuid}', encodeURI(triggerObjectUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List Triggers
     */
    listTriggers({ resource, eventResource }: ListTriggersRequest): Observable<Array<TriggerDto>>
    listTriggers({ resource, eventResource }: ListTriggersRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<TriggerDto>>>
    listTriggers({ resource, eventResource }: ListTriggersRequest, opts?: OperationOpts): Observable<Array<TriggerDto> | AjaxResponse<Array<TriggerDto>>> {

        const query: HttpQuery = {};

        if (resource != null) { query['resource'] = resource; }
        if (eventResource != null) { query['eventResource'] = eventResource; }

        return this.request<Array<TriggerDto>>({
            url: '/v1/workflows/triggers',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Update Trigger
     */
    updateTrigger({ triggerUuid, updateTriggerRequestDto }: UpdateTriggerRequest): Observable<TriggerDetailDto>
    updateTrigger({ triggerUuid, updateTriggerRequestDto }: UpdateTriggerRequest, opts?: OperationOpts): Observable<AjaxResponse<TriggerDetailDto>>
    updateTrigger({ triggerUuid, updateTriggerRequestDto }: UpdateTriggerRequest, opts?: OperationOpts): Observable<TriggerDetailDto | AjaxResponse<TriggerDetailDto>> {
        throwIfNullOrUndefined(triggerUuid, 'triggerUuid', 'updateTrigger');
        throwIfNullOrUndefined(updateTriggerRequestDto, 'updateTriggerRequestDto', 'updateTrigger');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<TriggerDetailDto>({
            url: '/v1/workflows/triggers/{triggerUuid}'.replace('{triggerUuid}', encodeURI(triggerUuid)),
            method: 'PUT',
            headers,
            body: updateTriggerRequestDto,
        }, opts?.responseOpts);
    };

}
