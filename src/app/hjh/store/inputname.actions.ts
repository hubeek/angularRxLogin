import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../../auth/store/actionTypes';
import { RegisterRequestInterface } from '../../auth/types/registerRequest';
import { InputNameInterface } from './types/inputNameInterface';

export const getUsernameInputAction = createAction(ActionTypes.GET_USER_INPUT);

export const setUsernameInputAction = createAction(
  ActionTypes.SET_USER_INPUT,
  props<{ username: string }>()
);
