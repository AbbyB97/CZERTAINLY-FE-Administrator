import { UserModel, UserDetailModel, CertificateModel, ComponentLockModel } from "models";
import { createFeatureSelector } from "utils/ducks";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoleModel } from "models/roles";


export type State = {

   usersListCheckedRows: string[];
   userRolesListCheckedRows: string[];
   componentLocks: ComponentLockModel[],
   deleteErrorMessage: string;

   user?: UserDetailModel;
   userRoles?: RoleModel[];

   users: UserModel[];

   isFetchingList: boolean;
   isFetchingDetail: boolean;
   isCreating: boolean;
   isDeleting: boolean;
   isUpdating: boolean;
   isEnabling: boolean;
   isDisabling: boolean;
   isFetchingRoles: boolean;
   isUpdatingRoles: boolean;
   isAddingRole: boolean;
   isRemovingRole: boolean;

};


export const initialState: State = {

   usersListCheckedRows: [],
   userRolesListCheckedRows: [],
   componentLocks: [],
   deleteErrorMessage: "",

   users: [],

   isFetchingDetail: false,
   isFetchingList: false,
   isCreating: false,
   isDeleting: false,
   isUpdating: false,
   isEnabling: false,
   isDisabling: false,
   isFetchingRoles: false,
   isUpdatingRoles: false,
   isAddingRole: false,
   isRemovingRole: false,

};


export const slice = createSlice({

   name: "users",

   initialState,

   reducers: {

      resetState: (state, action: PayloadAction<void>) => {

         Object.keys(state).forEach(
            key => { if (!initialState.hasOwnProperty(key)) (state as any)[key] = undefined; }
         );

         Object.keys(initialState).forEach(
            key => (state as any)[key] = (initialState as any)[key]
         );

      },


      setUserListCheckedRows: (state, action: PayloadAction<{ checkedRows: string[] }>) => {

         state.usersListCheckedRows = action.payload.checkedRows;

      },


      setUserRolesListCheckedRows: (state, action: PayloadAction<{ checkedRows: string[] }>) => {

         state.userRolesListCheckedRows = action.payload.checkedRows;

      },


      clearDeleteErrorMessages: (state, action: PayloadAction<void>) => {

         state.deleteErrorMessage = "";

      },


      list: (state, action: PayloadAction<void>) => {

         state.usersListCheckedRows = [];
         state.isFetchingList = true;

      },


      listSuccess: (state, action: PayloadAction<{ users: UserModel[] }>) => {

         state.isFetchingList = false;
         state.users = action.payload.users;

      },


      listFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isFetchingList = false;
      },

      // updateComponentLock: (state, action: PayloadAction<{ component: string }>) => {

      updateComponentLock: (state, action: PayloadAction<{ componentName: string, errored: boolean }>) => {
         const { componentName, errored } = action.payload
         state.componentLocks = [...state.componentLocks, { componentName, errored }];
      },

      getDetail: (state, action: PayloadAction<{ uuid: string }>) => {

         state.user = undefined;
         state.userRoles = undefined;
         state.userRolesListCheckedRows = [];
         state.isFetchingDetail = true;

      },


      getDetailSuccess: (state, action: PayloadAction<{ user: UserDetailModel }>) => {

         state.isFetchingDetail = false;

         state.user = action.payload.user;

         const userIndex = state.users.findIndex(user => user.uuid === action.payload.user.uuid);

         if (userIndex >= 0) {
            state.users[userIndex] = action.payload.user;
         } else {
            state.users.push(action.payload.user);
         }

      },


      getDetailFailure: (state, acttion: PayloadAction<{ error: string | undefined }>) => {

         state.isFetchingDetail = false;

      },


      create: (state, action: PayloadAction<{
         username: string,
         description?: string | undefined,
         firstName: string | undefined,
         lastName: string | undefined,
         email: string | undefined,
         enabled: boolean,
         certificate: CertificateModel | undefined,
         certificateUuid: string | undefined,
         roles?: string[]
      }>) => {

         state.isCreating = true;

      },


      createSuccess: (state, action: PayloadAction<{ user: UserDetailModel }>) => {

         state.isCreating = false;
         state.users.push(action.payload.user);

      },


      createFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isCreating = false;

      },


      update: (state, action: PayloadAction<{
         uuid: string,
         description?: string | undefined,
         firstName: string | undefined,
         lastName: string | undefined,
         email: string | undefined,
         certificate: CertificateModel | undefined,
         certificateUuid: string | undefined,
         roles?: string[]
      }>) => {

         state.isUpdating = true;

      },


      updateSuccess: (state, action: PayloadAction<{ user: UserDetailModel }>) => {

         state.isUpdating = false;

         const userIndex = state.users.findIndex(user => user.uuid === action.payload.user.uuid)

         if (userIndex >= 0) {
            state.users[userIndex] = action.payload.user;
         } else {
            state.users.push(action.payload.user);
         }

         if (state.user?.uuid === action.payload.user.uuid) state.user = action.payload.user;

      },


      updateFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isUpdating = false;

      },


      deleteUser: (state, action: PayloadAction<{ uuid: string, redirect?: string }>) => {

         state.isDeleting = true;

      },


      deleteUserSuccess: (state, action: PayloadAction<{ uuid: string, redirect?: string }>) => {

         state.isDeleting = false;

         state.usersListCheckedRows = [];

         const userIndex = state.users.findIndex(user => user.uuid === action.payload.uuid);

         if (userIndex >= 0) state.users.splice(userIndex, 1);

         if (state.user?.uuid === action.payload.uuid) state.user = undefined;

      },


      deleteUserFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.deleteErrorMessage = action.payload.error || "Unknown error";
         state.isDeleting = false;

      },


      enable: (state, action: PayloadAction<{ uuid: string }>) => {

         state.isEnabling = true;

      },


      enableSuccess: (state, action: PayloadAction<{ uuid: string }>) => {

         state.isEnabling = false;

         const admin = state.users.find(administrator => administrator.uuid === action.payload.uuid)
         if (admin) admin.enabled = true;

         if (state.user?.uuid === action.payload.uuid) state.user.enabled = true;

      },


      enableFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isEnabling = false;

      },


      disable: (state, action: PayloadAction<{ uuid: string }>) => {

         state.isDisabling = true;

      },


      disableSuccess: (state, action: PayloadAction<{ uuid: string }>) => {

         state.isDisabling = false;

         const admin = state.users.find(administrator => administrator.uuid === action.payload.uuid)

         if (admin) admin.enabled = false;

         if (state.user?.uuid === action.payload.uuid) state.user.enabled = false;

      },


      disableFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isDisabling = false;

      },


      getRoles: (state, action: PayloadAction<{ uuid: string }>) => {

         state.isFetchingRoles = true;

      },


      getRolesSuccess: (state, action: PayloadAction<{ uuid: string, roles: RoleModel[] }>) => {

         state.isFetchingRoles = false;

         state.userRoles = action.payload.roles;

      },


      getRolesFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isFetchingRoles = false;

      },


      updateRoles: (state, action: PayloadAction<{ uuid: string, roles: string[] }>) => {

         state.userRoles = undefined;
         state.isUpdatingRoles = true;

      },


      updateRolesSuccess: (state, action: PayloadAction<{ user: UserDetailModel }>) => {

         state.isUpdatingRoles = false;

         state.userRoles = action.payload.user.roles;

         if (state.user?.uuid === action.payload.user.uuid) state.user = action.payload.user;

      },


      updateRolesFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isUpdatingRoles = false;

      },


      addRole: (state, action: PayloadAction<{ uuid: string, roleUuid: string }>) => {

         state.isAddingRole = true;

      },


      addRoleSuccess: (state, action: PayloadAction<{ user: UserDetailModel }>) => {

         state.isAddingRole = false;

         state.userRoles = action.payload.user.roles;

         if (state.user?.uuid === action.payload.user.uuid) state.user = action.payload.user;

      },


      addRoleFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isAddingRole = false;

      },


      removeRole: (state, action: PayloadAction<{ uuid: string, roleUuid: string }>) => {

         state.isRemovingRole = true;

      },


      removeRoleSuccess: (state, action: PayloadAction<{ user: UserDetailModel }>) => {

         state.isRemovingRole = false;

         state.userRoles = action.payload.user.roles;

         if (state.user?.uuid === action.payload.user.uuid) state.user = action.payload.user;

      },


      removeRoleFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {

         state.isRemovingRole = false;

      }

   }

})


const state = createFeatureSelector<State>(slice.name);

const usersListCheckedRows = createSelector(state, state => state.usersListCheckedRows);
const userRolesListCheckedRows = createSelector(state, state => state.userRolesListCheckedRows);
const componentLocks = createSelector(state, state => state.componentLocks);

const deleteErrorMessage = createSelector(state, state => state.deleteErrorMessage);

const user = createSelector(state, state => state.user);
const userRoles = createSelector(state, state => state.userRoles);

const users = createSelector(state, state => state.users);

const isFetchingList = createSelector(state, state => state.isFetchingList);
const isFetchingDetail = createSelector(state, state => state.isFetchingDetail);
const isCreating = createSelector(state, state => state.isCreating);
const isUpdating = createSelector(state, state => state.isUpdating);
const isDeleting = createSelector(state, state => state.isDeleting);
const isEnabling = createSelector(state, state => state.isEnabling);
const isDisabling = createSelector(state, state => state.isDisabling);
const isFetchingRoles = createSelector(state, state => state.isFetchingRoles);
const isUpdatingRoles = createSelector(state, state => state.isUpdatingRoles);
const isAddingRole = createSelector(state, state => state.isAddingRole);
const isRemovingRole = createSelector(state, state => state.isRemovingRole);


export const selectors = {

   state,

   usersListCheckedRows,
   userRolesListCheckedRows,

   deleteErrorMessage,

   user,
   userRoles,

   users,
   componentLocks,
   isFetchingList,
   isFetchingDetail,
   isCreating,
   isDeleting,
   isUpdating,
   isEnabling,
   isDisabling,
   isFetchingRoles,
   isUpdatingRoles,
   isAddingRole,
   isRemovingRole

};


export const actions = slice.actions;


export default slice.reducer;
