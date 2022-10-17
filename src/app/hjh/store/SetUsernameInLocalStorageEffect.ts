import { PersistanceService } from '../../shared/services/persistance.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getUsernameInputAction,
  setUsernameInputAction,
} from './inputname.actions';
import { of, switchMap, tap } from 'rxjs';

@Injectable()
export class SetUsernameInLocalStorageEffect {
  setUsernameInputFromLocalStorage = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setUsernameInputAction),
        tap(({ username }) => {
          this.localStorage.set('usernameInput', username);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorage: PersistanceService
  ) {}
}
