import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { RegisterRequestInterface } from '../../types/registerRequest'
import { CurrentUserInterface } from '../../../shared/types/currentUser'
import { BackendErrorsInterface } from '../../../shared/types/backendErrorsInterface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCES,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
