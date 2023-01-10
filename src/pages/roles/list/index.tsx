import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Container } from "reactstrap";

import { actions, selectors } from "ducks/roles";

import Widget from "components/Widget";
import WidgetButtons, { WidgetButtonProps } from "components/WidgetButtons";
import MDBColumnName from "components/MDBColumnName";
import CustomTable, { TableDataRow, TableHeader } from "components/CustomTable";
import Dialog from "components/Dialog";
import { MDBBadge } from "mdbreact";
import ComponentLock from "components/ComponentLock";
import {selectors as userSelectors} from 'ducks/users'
import { LIST_OF_ROLES } from "static/componentLocks";

export default function RolesList() {

   const dispatch = useDispatch();
   const history = useHistory();

   const { path } = useRouteMatch();

   const checkedRows = useSelector(selectors.rolesListCheckedRows);
   const roles = useSelector(selectors.roles);

   const isFetching = useSelector(selectors.isFetchingList);
   const isDeleting = useSelector(selectors.isDeleting);
   const isUpdating = useSelector(selectors.isUpdating);
   const componentLocks = useSelector(userSelectors.componentLocks);
   const componentLockCheck = componentLocks.find(
      (componentLock) => componentLock.componentName === LIST_OF_ROLES
    );

    

   const isBusy = isFetching || isDeleting || isUpdating;

   const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

   useEffect(

      () => {

         dispatch(actions.setRolesListCheckedRows({ checkedRows: [] }));
         dispatch(actions.list());

      },
      [dispatch]

   );


   const onAddClick = useCallback(

      () => {

         history.push(`${path}/add`);

      },
      [history, path]

   );


   const onEditRoleUsersClick = useCallback(

      () => {

         if (checkedRows.length !== 1) return;
         history.push(`./roles/users/${checkedRows[0]}`);

      },
      [checkedRows, history]

   );


   const onEditRolePermissionsClick = useCallback(

      () => {

         if (checkedRows.length !== 1) return;
         history.push(`./roles/permissions/${checkedRows[0]}`);

      },
      [checkedRows, history]

   );


   const onDeleteConfirmed = useCallback(

      () => {

         setConfirmDelete(false);

         checkedRows.forEach(
            uuid => dispatch(actions.delete({ uuid }))
         );

      },
      [checkedRows, dispatch]

   );


   const setCheckedRows = useCallback(

      (rows: (string | number)[]) => {

         dispatch(actions.setRolesListCheckedRows({ checkedRows: rows as string[] }));

      },
      [dispatch]

   );


   const isSystemRoleSelected = useMemo(

      () => {

         return checkedRows.some(uuid => {
            const role = roles.find(role => role.uuid === uuid);
            return role && role.systemRole;
         });

      },
      [checkedRows, roles]

   )


   const buttons: WidgetButtonProps[] = useMemo(

      () => [
         { icon: "plus", disabled: false, tooltip: "Create", onClick: () => { onAddClick(); } },
         { icon: "trash", disabled: checkedRows.length === 0 || isSystemRoleSelected, tooltip: "Delete", onClick: () => { setConfirmDelete(true); } },
         { icon: "user", disabled: checkedRows.length !== 1 || isSystemRoleSelected, tooltip: "Edit role users", onClick: () => { onEditRoleUsersClick() } },
         { icon: "lock", disabled: checkedRows.length !== 1 || isSystemRoleSelected, tooltip: "Edit role permissions", onClick: () => { onEditRolePermissionsClick() } }
      ],
      [checkedRows.length, isSystemRoleSelected, onAddClick, onEditRolePermissionsClick, onEditRoleUsersClick]

   );


   const title = useMemo(

      () => (

         <div>

            <div className="pull-right mt-n-xs">
               <WidgetButtons buttons={buttons} />
            </div>

            <h5 className="mt-0">
               List of <span className="fw-semi-bold">Roles</span>
            </h5>

         </div>

      ),
      [buttons]

   );


   const rolesTableHeader: TableHeader[] = useMemo(

      () => [
         {
            id: "roleName",
            content: <MDBColumnName columnName="Role name" />,
            sortable: true,
            sort: "asc",
            width: "auto",
         },
         {
            id: "roleDescription",
            content: <MDBColumnName columnName="Role description" />,
            sortable: true,
            sort: "asc",
            width: "auto",
         },
         {
            id: "systemRole",
            content: <MDBColumnName columnName="System role" />,
            sortable: true,
            sort: "asc",
            width: "auto",
         }
      ],
      []

   );


   const rolesTableData: TableDataRow[] = useMemo(

      () => roles.map(

         role => ({

            id: role.uuid,

            columns: [

               <span style={{ whiteSpace: "nowrap" }}><Link to={`${path}/detail/${role.uuid}`}>{role.name}</Link></span>,

               role.description || "",

               <MDBBadge color={!role.systemRole ? "success" : "danger"}>{role.systemRole ? "Yes" : "No"}</MDBBadge>,

            ]
         })
      ),
      [roles, path]
   );


   return (

      <Container className="themed-container" fluid>
      <ComponentLock
        locked={componentLockCheck?.componentName === LIST_OF_ROLES}
        errored={false}
      >
        <Widget title={title} busy={isBusy}>
          <br />
          <CustomTable
            headers={rolesTableHeader}
            data={rolesTableData}
            onCheckedRowsChanged={setCheckedRows}
            canSearch={true}
            hasCheckboxes={true}
            hasPagination={true}
          />
        </Widget>
      </ComponentLock>

         <Dialog
            isOpen={confirmDelete}
            caption={`Delete ${checkedRows.length > 1 ? "Roles" : "an Role"}`}
            body={`You are about to delete ${checkedRows.length > 1 ? "Roles" : "an Role"}. Is this what you want to do?`}
            toggle={() => setConfirmDelete(false)}
            buttons={[
               { color: "danger", onClick: onDeleteConfirmed, body: "Yes, delete" },
               { color: "secondary", onClick: () => setConfirmDelete(false), body: "Cancel" },
            ]}
         />

      </Container>
   );

}
