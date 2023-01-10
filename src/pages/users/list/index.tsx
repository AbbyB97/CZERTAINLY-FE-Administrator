import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Container } from "reactstrap";

import { actions, selectors } from "ducks/users";

import Widget from "components/Widget";
import WidgetButtons, { WidgetButtonProps } from "components/WidgetButtons";
import MDBColumnName from "components/MDBColumnName";
import StatusBadge from "components/StatusBadge";
import CustomTable, { TableDataRow, TableHeader } from "components/CustomTable";
import Dialog from "components/Dialog";
import { MDBBadge } from "mdbreact";
import ComponentLock from "components/ComponentLock";
import { LIST_OF_USERS } from "static/componentLocks";

export default function UsersList() {

   const dispatch = useDispatch();
   const history = useHistory();

   const { path } = useRouteMatch();

   const checkedRows = useSelector(selectors.usersListCheckedRows);
   const users = useSelector(selectors.users);

   const isFetching = useSelector(selectors.isFetchingList);
   const isDeleting = useSelector(selectors.isDeleting);
   const isUpdating = useSelector(selectors.isUpdating);
   const isEnabling = useSelector(selectors.isEnabling);
   const isDisabling = useSelector(selectors.isDisabling);
   const componentLocks = useSelector(selectors.componentLocks);

   const componentLockCheck = componentLocks.find(
      (componentLock) => componentLock.componentName === LIST_OF_USERS
    );
  
  
   const isBusy = isFetching || isDeleting || isUpdating || isEnabling || isDisabling;

   const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

   useEffect(

      () => {

         dispatch(actions.resetState());
         dispatch(actions.setUserListCheckedRows({ checkedRows: [] }));
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


   const onEnableClick = useCallback(

      () => {

         checkedRows.forEach(
            uuid => dispatch(actions.enable({ uuid }))
         );

      },
      [checkedRows, dispatch]

   );


   const onDisableClick = useCallback(

      () => {

         checkedRows.forEach(
            uuid => dispatch(actions.disable({ uuid }))
         );

      },
      [checkedRows, dispatch]

   );


   const onDeleteConfirmed = useCallback(

      () => {

         setConfirmDelete(false);

         checkedRows.forEach(
            uuid => dispatch(actions.deleteUser({ uuid }))
         );

      },
      [checkedRows, dispatch]

   );


   const setCheckedRows = useCallback(

      (rows: (string | number)[]) => {

         dispatch(actions.setUserListCheckedRows({ checkedRows: rows as string[] }));

      },
      [dispatch]

   );


   const isSystemUserSelected = useMemo(

      () => {

         return checkedRows.some(uuid => {
            const user = users.find(user => user.uuid === uuid);
            return user && user.systemUser;
         });

      },
      [checkedRows, users]

   )


   const canEnable: boolean = useMemo(

      () => {

         if (checkedRows.length === 0) return false;
         if (checkedRows.length > 1) return true;
         const user = users.find(user => user.uuid === checkedRows[0]);
         if (user && !user.enabled) return true;
         return false;
      },
      [checkedRows, users]

   );


   const canDisable: boolean = useMemo(

      () => {

         if (checkedRows.length > 1) return true;
         const user = users.find(user => user.uuid === checkedRows[0]);
         return (user && user.enabled) || false;

      },
      [checkedRows, users]

   );


   const buttons: WidgetButtonProps[] = useMemo(

      () => [
         { icon: "plus", disabled: false, tooltip: "Create", onClick: () => { onAddClick(); } },
         { icon: "trash", disabled: checkedRows.length === 0 || isSystemUserSelected, tooltip: "Delete", onClick: () => { setConfirmDelete(true); } },
         { icon: "check", disabled: isSystemUserSelected || !canEnable, tooltip: "Enable", onClick: () => { onEnableClick() } },
         { icon: "times", disabled: isSystemUserSelected || !canDisable, tooltip: "Disable", onClick: () => { onDisableClick() } }
      ],
      [checkedRows.length, isSystemUserSelected, canEnable, canDisable, onAddClick, onEnableClick, onDisableClick]

   );


   const title = useMemo(

      () => (

         <div>

            <div className="pull-right mt-n-xs">
               <WidgetButtons buttons={buttons} />
            </div>

            <h5 className="mt-0">
               List of <span className="fw-semi-bold">Users</span>
            </h5>

         </div>

      ),
      [buttons]

   );


   const userTableHeader: TableHeader[] = useMemo(

      () => [
         {
            id: "username",
            content: <MDBColumnName columnName="Username" />,
            sortable: true,
            sort: "asc",
            width: "10%",
         },
         {
            id: "description",
            content: <MDBColumnName columnName="Description" />,
            sortable: true,
            width: "5%",
         },
         {
            id: "firstName",
            content: <MDBColumnName columnName="First name" />,
            sortable: true,
            width: "5%",
         },
         {
            id: "lastName",
            content: <MDBColumnName columnName="Last name" />,
            sortable: true,
            width: "5%",
         },
         {
            id: "email",
            content: <MDBColumnName columnName="Email" />,
            sortable: true,
         },
         {
            id: "systemUser",
            content: <MDBColumnName columnName="System user" />,
            align: "center",
            sortable: true,
            width: "7%",
         },
         {
            id: "userStatus",
            content: <MDBColumnName columnName="Status" />,
            align: "center",
            sortable: true,
            width: "7%",
         },
      ],
      []

   );


   const userTableData: TableDataRow[] = useMemo(

      () => users.map(

         user => ({

            id: user.uuid,

            columns: [

               <span style={{ whiteSpace: "nowrap" }}><Link to={`${path}/detail/${user.uuid}`}>{user.username}</Link></span>,

               <span style={{ whiteSpace: "nowrap" }}>{user.description || ""}</span>,

               <span style={{ whiteSpace: "nowrap" }}>{user.firstName || ""}</span>,

               <span style={{ whiteSpace: "nowrap" }}>{user.lastName || ""}</span>,

               <span style={{ whiteSpace: "nowrap" }}>{user.email || ""}</span>,

               <MDBBadge color={!user.systemUser ? "success" : "danger"}>{user.systemUser ? "Yes" : "No"}</MDBBadge>,

               <StatusBadge enabled={user.enabled} />,

            ]
         })
      ),
      [users, path]
   );

   

   return (

      <Container className="themed-container" fluid>
      <ComponentLock
        locked={componentLockCheck?.componentName === LIST_OF_USERS}
        errored={true}
        lockText="Cannot access Users"
        networkIssue={true}
      >
        <Widget title={title} busy={isBusy}>
          <br />
          <CustomTable
            headers={userTableHeader}
            data={userTableData}
            onCheckedRowsChanged={setCheckedRows}
            canSearch={true}
            hasCheckboxes={true}
            hasPagination={true}
          />
        </Widget>
      </ComponentLock>
         <Dialog
            isOpen={confirmDelete}
            caption={`Delete ${checkedRows.length > 1 ? "Users" : "an User"}`}
            body={`You are about to delete ${checkedRows.length > 1 ? "Users" : "an User"}. Is this what you want to do?`}
            toggle={() => setConfirmDelete(false)}
            buttons={[
               { color: "danger", onClick: onDeleteConfirmed, body: "Yes, delete" },
               { color: "secondary", onClick: () => setConfirmDelete(false), body: "Cancel" },
            ]}
         />

      </Container>
   );

}
