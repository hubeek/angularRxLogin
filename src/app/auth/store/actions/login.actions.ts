import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { LoginRequestInterface } from '../../types/loginRequestInterface'
import { CurrentUserInterface } from '../../../shared/types/currentUser'
import { BackendErrorsInterface } from '../../../shared/types/backendErrorsInterface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCES,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
