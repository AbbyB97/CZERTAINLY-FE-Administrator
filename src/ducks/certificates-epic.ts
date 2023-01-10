import { EMPTY, of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";

import history from "browser-history";

import { AppEpic } from "ducks";
import { extractError } from "utils/net";

import * as slice from "./certificates";
import { actions as alertActions } from "./alerts";
import { transformAvailableCertificateFilterDTOToModel, transformCertDTOToModel, transformCertificateHistoryDTOToModel, transformRaProfileDTOToCertificateModel } from "./transform/certificates";
import { transformAttributeDescriptorDTOToModel, transformAttributeModelToDTO } from "./transform/attributes";
import { transformGroupDtoToModel } from "./transform/groups";
import { transformLocationDtoToModel } from "./transform/locations";
import * as usersSlice from "./users";
import { CERTIFICATE_INVENTORY_FILTER, LIST_OF_CERTIFICATES } from "static/componentLocks";


const listCertificates: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.listCertificates.match
      ),
      switchMap(

         action => {

            return deps.apiClients.certificates.getCertificatesList(
               action.payload.query.itemsPerPage,
               action.payload.query.pageNumber,
               action.payload.query.filters
            ).pipe(

               map(
                  list => slice.actions.listCertificatesSuccess({
                     certificateList: list.certificates.map(transformCertDTOToModel),
                     totalItems: list.totalItems,
                     totalPages: list.totalPages,
                  })
               ),

               catchError(
                  err => of(slice.actions.listCertificatesFailure({ error: extractError(err, "Failed to get certificates list") }))
               )

            )
         }

      )

   )

}


const listCertificatesFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.listCertificatesFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      ),
      map(
         action => usersSlice.actions.updateComponentLock({ componentName: LIST_OF_CERTIFICATES, errored: false })
      )

   )

}


const getCertificateDetail: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getCertificateDetail.match
      ),
      switchMap(

         action => deps.apiClients.certificates.getCertificateDetail(action.payload.uuid).pipe(

            map(
               certificate => slice.actions.getCertificateDetailSuccess({ certificate: transformCertDTOToModel(certificate) })
            ),

            catchError(
               err => of(slice.actions.getCertificateDetailFailure({ error: extractError(err, "Failed to get certificate detail") }))
            )

         )

      )

   )

}


const getCertificateDetailFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getCertificateDetailFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const getCertificateValidationResult: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getCertificateValidationResult.match
      ),
      switchMap(

         action => deps.apiClients.certificates.getCertificateValidationResult(action.payload.uuid).pipe(

            map(
               result => slice.actions.getCertificateValidationResultSuccess(result)
            ),

            catchError(
               err => of(slice.actions.getCertificateValidationResultFailure({ error: extractError(err, "Failed to get certificate validation result") }))
            )

         )

      )

   )

}


const getCertificateValidationResultFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getCertificateValidationResultFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occurred")
      )

   )

}


const issueCertificate: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.issueCertificate.match
      ),
      switchMap(

         action => deps.apiClients.operations.issueCertificate(
            action.payload.raProfileUuid,
            action.payload.pkcs10,
            action.payload.attributes.map(attribute => transformAttributeModelToDTO(attribute)),
            action.payload.authorityUuid
         ).pipe(

            map(
               operation => slice.actions.issueCertificateSuccess({ uuid: operation.uuid, certificateData: operation.certificateData })
            ),

            catchError(
               err => of(slice.actions.issueCertificateFailure({ error: extractError(err, "Failed to issue certificate") }))
            )

         )

      )

   )

}


const issueCertificateSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.issueCertificateSuccess.match
      ),
      switchMap(

         action => {
            history.push(`./detail/${action.payload.uuid}`);
            return EMPTY;
         }

      )

   )

}


const issueCertificateFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.issueCertificateFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const revokeCertificate: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.revokeCertificate.match
      ),
      switchMap(

         action => deps.apiClients.operations.revokeCertificate(
            action.payload.uuid,
            action.payload.raProfileUuid,
            action.payload.reason,
            action.payload.attributes.map(attribute => transformAttributeModelToDTO(attribute)),
            action.payload.authorityUuid
         ).pipe(

            map(
               () => slice.actions.revokeCertificateSuccess({ uuid: action.payload.uuid })
            ),

            catchError(
               err => of(slice.actions.revokeCertificateFailure({ error: extractError(err, "Failed to revoke certificate") }))
            )

         )

      )

   )

}


const revokeCertificateFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.revokeCertificateFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const renewCertificate: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.renewCertificate.match
      ),
      switchMap(

         action => deps.apiClients.operations.renewCertificate(
            action.payload.uuid,
            action.payload.raProfileUuid,
            action.payload.pkcs10,
            action.payload.authorityUuid,
         ).pipe(

            map(
               operation => slice.actions.renewCertificateSuccess({ uuid: operation.uuid })
            ),

            catchError(
               err => of(slice.actions.renewCertificateFailure({ error: extractError(err, "Failed to renew certificate") }))
            )

         )

      )

   )

}

const renewCertificateSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.renewCertificateSuccess.match
      ),
      switchMap(

         action => {
            history.push(`./${action.payload.uuid}`);
            return EMPTY;
         }

      )

   )

};


const renewCertificateFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.renewCertificateFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occurred")
      )

   )

}

const getAvailableCertificateFilters: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getAvailableCertificateFilters.match
      ),
      switchMap(

         action => deps.apiClients.certificates.getAvailableCertificateFilters().pipe(

            map(
               filters => slice.actions.getAvailableCertificateFiltersSuccess({
                  availableCertificateFilters: filters.map(filter => transformAvailableCertificateFilterDTOToModel(filter))
               })
            ),

            catchError(
               err => of(slice.actions.getAvailableCertificateFiltersFailure({ error: extractError(err, "Failed to get available certificate filters") }))
            )

         )

      )

   )

}


const getAvailableCertificateFiltersFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getAvailableCertificateFiltersFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      ),
      map(
         action => usersSlice.actions.updateComponentLock({ componentName: CERTIFICATE_INVENTORY_FILTER, errored: false })
      )

   )

}


const getCertificateHistory: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getCertificateHistory.match
      ),
      switchMap(

         action => deps.apiClients.certificates.getCertificateHistory(action.payload.uuid).pipe(

            map(
               records => slice.actions.getCertificateHistorySuccess({
                  certificateHistory: records.map(record => transformCertificateHistoryDTOToModel(record))
               })
            ),

            catchError(
               err => of(slice.actions.getCertificateHistoryFailure({ error: extractError(err, "Failed to get certificate history") }))
            )

         )

      )

   )

}

const getCertificateHistoryFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getCertificateHistoryFailure.match
      ),
      map(

         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const listCertificateLocations: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.listCertificateLocations.match
      ),
      switchMap(

         action => deps.apiClients.certificates.listLocations(action.payload.uuid).pipe(

            map(
               locations => slice.actions.listCertificateLocationsSuccess({
                  certificateLocations: locations.map(location => transformLocationDtoToModel(location))
               })
            ),

            catchError(
               err => of(slice.actions.listCertificateLocationsFailure({ error: extractError(err, "Failed to list certificate locations") }))
            )

         )

      )

   )

}


const listCertificateLocationsFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.listCertificateLocationsFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const deleteCertificate: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.deleteCertificate.match
      ),
      switchMap(

         action => deps.apiClients.certificates.deleteCertificate(action.payload.uuid).pipe(

            map(
               () => slice.actions.deleteCertificateSuccess({ uuid: action.payload.uuid })
            ),

            catchError(
               err => of(slice.actions.deleteCertificateFailure({ error: extractError(err, "Failed to delete certificate") }))
            )

         )

      )

   )
}

const deleteCertificateSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.deleteCertificateSuccess.match
      ),
      switchMap(

         () => {
            history.push(`../`);
            return EMPTY;
         }

      )

   )

};



const deleteCertificateFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.deleteCertificateFailure.match
      ),
      map(

         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const updateGroup: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateGroup.match
      ),
      switchMap(

         action => deps.apiClients.certificates.updateGroup(
            action.payload.uuid,
            action.payload.groupUuid,
         ).pipe(

            switchMap(

               () => deps.apiClients.groups.getGroupDetail(action.payload.groupUuid).pipe(

                  map(
                     group => slice.actions.updateGroupSuccess({
                        uuid: action.payload.uuid,
                        groupUuid: action.payload.groupUuid,
                        group: transformGroupDtoToModel(group)
                     })
                  ),

                  catchError(
                     err => of(slice.actions.updateGroupFailure({ error: extractError(err, "Failed to update group") }))
                  )

               ),
            ),

            catchError(
               err => of(slice.actions.updateGroupFailure({ error: extractError(err, "Failed to update group") }))
            )

         )

      )

   )

}


const updateGroupFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateGroupFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const updateRaProfile: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateRaProfile.match
      ),
      switchMap(

         action => deps.apiClients.certificates.updateRaProfile(
            action.payload.uuid,
            action.payload.raProfileUuid,
         ).pipe(

            switchMap(

               () => deps.apiClients.profiles.getRaProfileDetail(action.payload.authorityUuid, action.payload.raProfileUuid).pipe(

                  map(
                     raProfile => slice.actions.updateRaProfileSuccess({
                        uuid: action.payload.uuid,
                        raProfileUuid: action.payload.raProfileUuid,
                        raProfile: transformRaProfileDTOToCertificateModel(raProfile)
                     })
                  ),

                  catchError(
                     err => of(slice.actions.updateRaProfileFailure({ error: extractError(err, "Failed to update RA profile") }))
                  )

               ),

            ),

            catchError(
               err => of(slice.actions.updateRaProfileFailure({ error: extractError(err, "Failed to update RA profile") }))
            )

         )

      )

   )

};


const updateRaProfileFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateRaProfileFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const updateOwner: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateOwner.match
      ),
      switchMap(

         action => deps.apiClients.certificates.updateOwner(
            action.payload.uuid,
            action.payload.owner,
         ).pipe(

            map(
               () => slice.actions.updateOwnerSuccess({
                  uuid: action.payload.uuid,
                  owner: action.payload.owner
               }),
            ),

            catchError(
               err => of(slice.actions.updateOwnerFailure({ error: extractError(err, "Failed to update owner") }))
            )

         )

      )

   )

}


const updateOwnerFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.updateOwnerFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const bulkUpdateGroup: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkUpdateGroup.match
      ),
      switchMap(

         action => deps.apiClients.certificates.bulkUpdateGroup(
            action.payload.uuids,
            action.payload.groupUuid,
            action.payload.inFilter,
            action.payload.allSelect,
         ).pipe(

            switchMap(

               () => deps.apiClients.groups.getGroupDetail(action.payload.groupUuid).pipe(

                  map(

                     group => slice.actions.bulkUpdateGroupSuccess({
                        uuids: action.payload.uuids,
                        group,
                        inFilter: action.payload.inFilter,
                        allSelect: action.payload.allSelect,
                     })

                  ),

                  catchError(
                     err => of(slice.actions.updateOwnerFailure({ error: extractError(err, "Failed to bulk update update group") }))
                  )

               )

            ),

            catchError(
               err => of(slice.actions.updateOwnerFailure({ error: extractError(err, "Failed to bulk update update group") }))
            )

         )

      )

   )

}


const bulkUpdateGroupFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkUpdateGroupFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const bulkUpdateRaProfile: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkUpdateRaProfile.match
      ),
      switchMap(

         action => deps.apiClients.certificates.bulkUpdateRaProfile(
            action.payload.uuids,
            action.payload.raProfileUuid,
            action.payload.inFilter,
            action.payload.allSelect,
         ).pipe(

            switchMap(

               () => deps.apiClients.profiles.getRaProfileDetail(action.payload.authorityUuid, action.payload.raProfileUuid).pipe(

                  map(

                     raProfile => slice.actions.bulkUpdateRaProfileSuccess({
                        uuids: action.payload.uuids,
                        raProfile,
                        inFilter: action.payload.inFilter,
                        allSelect: action.payload.allSelect,
                     })

                  ),

                  catchError(
                     err => of(slice.actions.updateOwnerFailure({ error: extractError(err, "Failed to bulk update update RA profile") }))
                  )

               )

            ),

            catchError(
               err => of(slice.actions.updateOwnerFailure({ error: extractError(err, "Failed to bulk update update RA profile") }))
            )

         )

      )

   )

}


const bulkUpdateRaProfileFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkUpdateRaProfileFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const bulkUpdateOwner: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkUpdateOwner.match
      ),
      switchMap(

         action => deps.apiClients.certificates.bulkUpdateOwner(
            action.payload.uuids,
            action.payload.owner,
            action.payload.inFilter,
            action.payload.allSelect,
         ).pipe(

            map(

               () => slice.actions.bulkUpdateOwnerSuccess({
                  uuids: action.payload.uuids,
                  owner: action.payload.owner,
                  inFilter: action.payload.inFilter,
                  allSelect: action.payload.allSelect,
               }),

            ),

            catchError(
               err => of(slice.actions.updateOwnerFailure({ error: extractError(err, "Failed to bulk update update owner") }))
            )

         )

      )

   )

}


const bulkUpdateOwnerFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkUpdateOwnerFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const bulkDelete: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkDelete.match
      ),
      switchMap(

         action => deps.apiClients.certificates.bulkDeleteCertificate(
            action.payload.uuids,
            action.payload.inFilter,
            action.payload.allSelect,
         ).pipe(

            map(

               (result) => slice.actions.bulkDeleteSuccess({
                  uuids: action.payload.uuids,
                  inFilter: action.payload.inFilter,
                  allSelect: action.payload.allSelect,
                  response: result,
               }),

            ),

            catchError(
               err => of(slice.actions.bulkDeleteFailure({ error: extractError(err, "Failed to bulk delete certificates") }))
            )

         )

      )

   )

}


const bulkDeleteSuccess: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkDeleteSuccess.match
      ),
      map(
         action => alertActions.success(action.payload.response.message)
      )

   )

}

const bulkDeleteFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.bulkDeleteFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const uploadCertificate: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.uploadCertificate.match
      ),
      switchMap(

         action => deps.apiClients.certificates.uploadCertificate(
            action.payload.certificate
         ).pipe(

            switchMap(

               obj => deps.apiClients.certificates.getCertificateDetail(obj.uuid).pipe(

                  map(

                     certificate => slice.actions.uploadCertificateSuccess({
                        uuid: obj.uuid,
                        certificate,
                     })

                  ),

                  catchError(
                     err => of(slice.actions.uploadCertificateFailure({ error: extractError(err, "Failed to upload certificate") }))
                  )

               )

            ),

            catchError(
               err => of(slice.actions.uploadCertificateFailure({ error: extractError(err, "Failed to upload certificate") }))
            )

         )

      )

   )

}


const uploadCertificateFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.uploadCertificateFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const getIssuanceAttributes: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getIssuanceAttributes.match
      ),
      switchMap(

         action => deps.apiClients.operations.getIssuanceAttributes(
            action.payload.raProfileUuid,
            action.payload.authorityUuid,
         ).pipe(

            map(

               attributes => slice.actions.getIssuanceAttributesSuccess({
                  raProfileUuid: action.payload.raProfileUuid,
                  issuanceAttributes: attributes.map(attribute => transformAttributeDescriptorDTOToModel(attribute)),
               }),

            ),

            catchError(
               err => of(slice.actions.getIssuanceAttributesFailure({ error: extractError(err, "Failed to get issuance attributes") }))
            )

         )

      )

   )

}


const getIssuanceAttributesFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getIssuanceAttributesFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const getRevocationAttributes: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getRevocationAttributes.match
      ),
      switchMap(

         action => deps.apiClients.operations.getRevocationAttributes(
            action.payload.raProfileUuid,
            action.payload.authorityUuid,
         ).pipe(

            map(

               attributes => slice.actions.getRevocationAttributesSuccess({
                  raProfileUuid: action.payload.raProfileUuid,
                  revocationAttributes: attributes.map(attribute => transformAttributeDescriptorDTOToModel(attribute)),
               }),

            ),

            catchError(
               err => of(slice.actions.getRevocationAttributesFailure({ error: extractError(err, "Failed to get revocation attributes") }))
            )

         )

      )

   )

}


const getRevocationAttributesFailure: AppEpic = (action$, state, deps) => {

   return action$.pipe(

      filter(
         slice.actions.getRevocationAttributesFailure.match
      ),
      map(
         action => alertActions.error(action.payload.error || "Unexpected error occured")
      )

   )

}


const checkCompliance: AppEpic = (action$, state$, deps) => {

   return action$.pipe(

      filter(
         slice.actions.checkCompliance.match
      ),
      switchMap(

         action => deps.apiClients.certificates.checkCompliance(
            action.payload.uuids
         ).pipe(

            map(
               () => slice.actions.checkComplianceSuccess()
            ),

            catchError(
               err => of(slice.actions.checkComplianceFailed({ error: extractError(err, "Failed to check compliance") }))

            )

         )

      )

   )
}


const checkComplianceFailed: AppEpic = (action$, state$, deps) => {

   return action$.pipe(

      filter(
         slice.actions.checkComplianceFailed.match
      ),
      map(

         action => alertActions.error(action.payload.error || "Unexpected error occurred")
      )

   );
}


const checkComplianceSuccess: AppEpic = (action$, state$, deps) => {

   return action$.pipe(

      filter(
         slice.actions.checkComplianceSuccess.match
      ),
      map(
         action => alertActions.success("Compliance Check for the certificates initiated")
      )

   );

}


const epics = [
   listCertificates,
   listCertificatesFailure,
   getCertificateDetail,
   getCertificateDetailFailure,
   getCertificateValidationResult,
   getCertificateValidationResultFailure,
   issueCertificate,
   issueCertificateSuccess,
   issueCertificateFailure,
   revokeCertificate,
   revokeCertificateFailure,
   renewCertificate,
   renewCertificateSuccess,
   renewCertificateFailure,
   getAvailableCertificateFilters,
   getAvailableCertificateFiltersFailure,
   getCertificateHistory,
   getCertificateHistoryFailure,
   listCertificateLocations,
   listCertificateLocationsFailure,
   deleteCertificate,
   deleteCertificateSuccess,
   deleteCertificateFailure,
   updateGroup,
   updateGroupFailure,
   updateRaProfile,
   updateRaProfileFailure,
   updateOwner,
   updateOwnerFailure,
   bulkUpdateGroup,
   bulkUpdateGroupFailure,
   bulkUpdateRaProfile,
   bulkUpdateRaProfileFailure,
   bulkUpdateOwner,
   bulkUpdateOwnerFailure,
   bulkDelete,
   bulkDeleteSuccess,
   bulkDeleteFailure,
   uploadCertificate,
   uploadCertificateFailure,
   getIssuanceAttributes,
   getIssuanceAttributesFailure,
   getRevocationAttributes,
   getRevocationAttributesFailure,
   getCertificateHistoryFailure,
   checkCompliance,
   checkComplianceFailed,
   checkComplianceSuccess,
];


export default epics;
