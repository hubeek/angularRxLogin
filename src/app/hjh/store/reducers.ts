import { AuthStateInterface } from '../../auth/types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { InputNameInterface } from './types/inputNameInterface';
import { registerAction } from '../../auth/store/actions/register.actions';
import {
  getUsernameInputAction,
  setUsernameInputAction,
} from './inputname.actions';

const initialState: InputNameInterface = {
  username: null,
};

const inputnameReducer = createReducer(
  initialState,
  on(
    getUsernameInputAction,
    (state): InputNameInterface => ({
      ...state,
    })
  ),
  on(
    setUsernameInputAction,
    (state, action): InputNameInterface => ({
      ...state,
      username: action.username,
    })
  )
);

export function reducers(state: InputNameInterface, action: Action) {
  return inputnameReducer(state, action);
}
