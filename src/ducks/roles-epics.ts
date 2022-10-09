import { EMPTY, of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap } from "rxjs/operators";
import history from "browser-history";

import { AppEpic } from "ducks";
import { extractError } from "utils/net";

import * as slice from "./roles";
import { actions as alertActions } from "./alerts";
import { transformRoleDetailDTOToModel, transformRoleDTOToModel, transformSubjectPermissionsDTOToModel } from "./transform/roles";


const list: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.list.match
      ),
      switchMap(

         () => deps.apiClients.roles.list().pipe(

            map(list => slice.actions.listSuccess({ roles: list.map(role => transformRoleDTOToModel(role)) })),

            catchError(err => of(slice.actions.listFailure({ error: extractError(err, "Failed to get roles list") })))

         )
      )

   )

}


const listFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.listFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const getDetail: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getDetail.match
      ),
      switchMap(

         action => deps.apiClients.roles.getDetail(action.payload.uuid).pipe(

            map(role => slice.actions.getDetailSuccess({ role: transformRoleDetailDTOToModel(role) })),

            catchError(err => of(slice.actions.getDetailFailure({ error: extractError(err, "Failed to get role detail") })))

         )

      )

   )

}


const getDetailFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getDetailFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const create: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.create.match
      ),
      switchMap(

         action => deps.apiClients.roles.create(action.payload.name, action.payload.description).pipe(

            switchMap(

               role => deps.apiClients.roles.updatePermissions(role.uuid, transformSubjectPermissionsDTOToModel(action.payload.permissions)).pipe(

                  map(() => slice.actions.createSuccess({ role: transformRoleDetailDTOToModel(role) })),

                  catchError(err => of(slice.actions.createFailure({ error: extractError(err, "Failed to create role permissions") })))

               )

            ),

            catchError(err => of(slice.actions.createFailure({ error: extractError(err, "Failed to create role") })))

         )

      )

   )

}


const createSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.createSuccess.match
      ),

      switchMap(

         action => {
            history.push(`./detail/${action.payload.role.uuid}`);
            return EMPTY;
         }

      )

   )

}



const createFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.createFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const update: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.update.match
      ),
      switchMap(

         action => deps.apiClients.roles.update(
            action.payload.uuid,
            action.payload.name,
            action.payload.description
         ).pipe(

            switchMap(

               role => {

                  return deps.apiClients.roles.updatePermissions(role.uuid, action.payload.permissions).pipe(

                     map(() => slice.actions.updateSuccess({ role: transformRoleDetailDTOToModel(role) })),

                     catchError(err => of(slice.actions.updateFailure({ error: extractError(err, "Failed to update role") })))

                  )

               }

            )

         )

      )

   )

}


const updateSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateSuccess.match
      ),
      switchMap(

         action => {
            history.push(`../detail/${action.payload.role.uuid}`);
            return EMPTY;
         }

      )

   )

}


const updateFailure: AppEpic = (action$, state, deps) => {


   return action$.pipe(

      filter(
         slice.actions.updateFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const deleteRole: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.delete.match
      ),
      mergeMap(

         action => deps.apiClients.roles.delete(action.payload.uuid).pipe(

            map(() => slice.actions.deleteSuccess({ uuid: action.payload.uuid, redirect: action.payload.redirect })),

            catchError(err => of(slice.actions.deleteFailure({ error: extractError(err, "Failed to delete role") })))

         )

      )

   )

}


const deleteSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.deleteSuccess.match
      ),
      switchMap(

         action => {
            if (action.payload.redirect) history.push(action.payload.redirect);
            return EMPTY;
         }

      )

   )

}


const deleteFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.deleteFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const getPermissions: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getPermissions.match
      ),
      switchMap(

         action => deps.apiClients.roles.getPermissions(action.payload.uuid).pipe(

            map(
               permissions => slice.actions.getPermissionsSuccess({
                  uuid: action.payload.uuid,
                  permissions: transformSubjectPermissionsDTOToModel(permissions)
               })
            ),

            catchError(err => of(slice.actions.getPermissionsFailure({ error: extractError(err, "Failed to get role permissions") })))

         )

      )

   )

}


const getPermissionsFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getPermissionsFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const updatePermissions: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updatePermissions.match
      ),
      switchMap(

         action => deps.apiClients.roles.updatePermissions(
            action.payload.uuid,
            action.payload.permissions
         ).pipe(

            map(permissions => slice.actions.updatePermissionsSuccess({
               uuid: action.payload.uuid,
               permissions: transformSubjectPermissionsDTOToModel(permissions)
            })),

            catchError(err => of(slice.actions.updatePermissionsFailure({ error: extractError(err, "Failed to update role permissions") })))

         )

      )

   )

}


const epics = [
   list,
   listFailure,
   getDetail,
   getDetailFailure,
   create,
   createSuccess,
   createFailure,
   update,
   updateSuccess,
   updateFailure,
   deleteRole,
   deleteSuccess,
   deleteFailure,
   getPermissions,
   getPermissionsFailure,
   updatePermissions
];

export default epics;