import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { CurrentUserInterface } from '../../../shared/types/currentUser'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCES,
  props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
  // props<{ errors: BackendErrorsInterface }>()
)
