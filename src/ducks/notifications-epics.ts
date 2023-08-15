import { AppEpic } from "ducks";
import { of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap } from "rxjs/operators";
import { extractError } from "utils/net";
import { actions as alertActions } from "./alerts";
import { actions as appRedirectActions } from "./app-redirect";
import { actions as widgetLockActions } from "./widget-locks";

import { AnyAction } from "@reduxjs/toolkit";
import { store } from "index";
import { FunctionGroupCode } from "types/openapi";
import { LockWidgetNameEnum } from "types/widget-locks";
import { EntityType } from "./filters";
import { slice } from "./notifications";
import { actions as pagingActions } from "./paging";
import { transformAttributeDescriptorDtoToModel } from "./transform/attributes";
import { transformSearchRequestModelToDto } from "./transform/certificates";
import { transformConnectorResponseDtoToModel } from "./transform/connectors";
import {
    transformNotificationDtoToModel,
    transformNotificationInstanceDtoToModel,
    transformNotificationInstanceModelToDto,
} from "./transform/notifications";

const listOverviewNotifications: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.listOverviewNotifications.match),
        switchMap((action) =>
            deps.apiClients.notifications.listNotifications({ request: { unread: true } }).pipe(
                mergeMap((response) =>
                    of(
                        slice.actions.listOverviewNotificationsSuccess(response.items.map(transformNotificationDtoToModel)),
                        widgetLockActions.removeWidgetLock(LockWidgetNameEnum.NotificationsOverview),
                    ),
                ),

                catchError((err) =>
                    of(
                        slice.actions.listOverviewNotificationsFailure({
                            error: extractError(err, "Failed to list overview notification"),
                        }),
                        appRedirectActions.fetchError({ error: err, message: "Failed to list overview notifications" }),
                        widgetLockActions.insertWidgetLock(err, LockWidgetNameEnum.NotificationsOverview),
                    ),
                ),
            ),
        ),
    );
};

const listNotifications: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.listNotifications.match),
        switchMap((action) => {
            store.dispatch(pagingActions.list(EntityType.NOTIFICATIONS));
            return deps.apiClients.notifications
                .listNotifications({
                    request: { unread: action.payload.unread, ...transformSearchRequestModelToDto(action.payload.pagination) },
                })
                .pipe(
                    mergeMap((response) =>
                        of(
                            slice.actions.listNotificationsSuccess(response.items.map(transformNotificationDtoToModel)),
                            pagingActions.listSuccess({ entity: EntityType.NOTIFICATIONS, totalItems: response.totalItems }),
                            widgetLockActions.removeWidgetLock(LockWidgetNameEnum.ListOfNotifications),
                        ),
                    ),

                    catchError((err) =>
                        of(
                            pagingActions.listFailure(EntityType.NOTIFICATIONS),
                            appRedirectActions.fetchError({ error: err, message: "Failed to get list of notifications" }),
                            widgetLockActions.insertWidgetLock(err, LockWidgetNameEnum.ListOfNotifications),
                        ),
                    ),
                );
        }),
    );
};

const deleteNotification: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.deleteNotification.match),
        mergeMap((action) =>
            deps.apiClients.notifications.deleteNotification({ uuid: action.payload.uuid }).pipe(
                mergeMap(() =>
                    of(slice.actions.deleteNotificationSuccess({ uuid: action.payload.uuid }), slice.actions.listOverviewNotifications()),
                ),

                catchError((err) =>
                    of(
                        slice.actions.deleteNotificationFailure({ error: extractError(err, "Failed to delete notification") }),
                        appRedirectActions.fetchError({ error: err, message: "Failed to delete notification" }),
                    ),
                ),
            ),
        ),
    );
};

const markAsReadNotification: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.markAsReadNotification.match),
        mergeMap((action) =>
            deps.apiClients.notifications.markNotificationAsRead({ uuid: action.payload.uuid }).pipe(
                mergeMap((res) =>
                    of(
                        slice.actions.markAsReadNotificationSuccess(transformNotificationDtoToModel(res)),
                        slice.actions.listOverviewNotifications(),
                    ),
                ),

                catchError((err) =>
                    of(
                        slice.actions.markAsReadNotificationFailure({ error: extractError(err, "Failed to mark notification as read") }),
                        appRedirectActions.fetchError({ error: err, message: "Failed to mark notification as read" }),
                    ),
                ),
            ),
        ),
    );
};

const listNotificationInstances: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.listNotificationInstances.match),
        mergeMap((action) =>
            deps.apiClients.notificationManagement.listNotificationInstances().pipe(
                mergeMap((res) => of(slice.actions.listNotificationInstancesSuccess(res.map(transformNotificationInstanceDtoToModel)))),

                catchError((err) =>
                    of(
                        slice.actions.listNotificationInstancesFailure({
                            error: extractError(err, "Failed to list notification instances"),
                        }),
                        appRedirectActions.fetchError({ error: err, message: "Failed to list notification instances" }),
                    ),
                ),
            ),
        ),
    );
};

export const listNotificationProviders: AppEpic = (action$, state, deps) => {
    return action$.pipe(
        filter(slice.actions.listNotificationProviders.match),
        switchMap(() =>
            deps.apiClients.connectors.listConnectors({ functionGroup: FunctionGroupCode.NotificationProvider }).pipe(
                map((providers) =>
                    slice.actions.listNotificationProvidersSuccess({
                        providers: providers.map(transformConnectorResponseDtoToModel),
                    }),
                ),
                catchError((error) =>
                    of(
                        slice.actions.listNotificationProvidersFailure({
                            error: extractError(error, "Failed to get Entity Provider list"),
                        }),
                        appRedirectActions.fetchError({
                            error,
                            message: "Failed to get Entity Provider list",
                        }),
                    ),
                ),
            ),
        ),
        catchError((error) => of(appRedirectActions.fetchError({ error: error, message: "Failed to get Entity Provider list" }))),
        map((action) => action as AnyAction),
    );
};

const getNotificationInstance: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.getNotificationInstance.match),
        mergeMap((action) =>
            deps.apiClients.notificationManagement.getNotificationInstance({ uuid: action.payload.uuid }).pipe(
                mergeMap((res) => of(slice.actions.getNotificationInstanceSuccess(transformNotificationInstanceDtoToModel(res)))),

                catchError((err) =>
                    of(
                        slice.actions.getNotificationInstanceFailure({
                            error: extractError(err, "Failed to get notification instance details"),
                        }),
                        appRedirectActions.fetchError({ error: err, message: "Failed to get notification instance" }),
                    ),
                ),
            ),
        ),
    );
};
// alertActions.success("Notifications settings updated successfully."),

const createNotificationInstance: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.createNotificationInstance.match),
        mergeMap((action) =>
            deps.apiClients.notificationManagement
                .createNotificationInstance({ notificationInstanceRequestDto: transformNotificationInstanceModelToDto(action.payload) })
                .pipe(
                    mergeMap((res) =>
                        of(
                            slice.actions.createNotificationInstanceSuccess(),
                            alertActions.success("Notifications Instance added successfully."),
                            appRedirectActions.redirect({ url: `/notificationinstances/detail/${res.uuid}` }),
                        ),
                    ),
                    catchError((err) =>
                        of(
                            slice.actions.createNotificationInstanceFailure({
                                error: extractError(err, "Failed to create notification instance"),
                            }),
                            appRedirectActions.fetchError({ error: err, message: "Failed to create notification instance" }),
                        ),
                    ),
                ),
        ),
    );
};

const getNotificationAttributesDescriptors: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(slice.actions.getNotificationAttributesDescriptors.match),
        mergeMap((action) =>
            deps.apiClients.connectors
                .getAttributes({
                    kind: action.payload.kind,
                    functionGroup: FunctionGroupCode.NotificationProvider,
                    uuid: action.payload.uuid,
                })
                .pipe(
                    map((attributeDescriptors) =>
                        slice.actions.getNotificationAttributesDescriptorsSuccess({
                            attributeDescriptor: attributeDescriptors.map(transformAttributeDescriptorDtoToModel),
                        }),
                    ),

                    catchError((err) =>
                        of(
                            slice.actions.getNotificationAttributeDescriptorsFailure({
                                error: extractError(err, "Failed to get notification provider attributes descriptors"),
                            }),
                            appRedirectActions.fetchError({
                                error: err,
                                message: "Failed to get notification provider attributes descriptors",
                            }),
                        ),
                    ),
                ),
        ),
    );
};

const epics = [
    listOverviewNotifications,
    listNotifications,
    deleteNotification,
    markAsReadNotification,
    listNotificationInstances,
    getNotificationInstance,
    createNotificationInstance,
    listNotificationProviders,
    getNotificationAttributesDescriptors,
];

export default epics;
