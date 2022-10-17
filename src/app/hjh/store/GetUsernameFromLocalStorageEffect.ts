import { PersistanceService } from '../../shared/services/persistance.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getUsernameInputAction,
  setUsernameInputAction,
} from './inputname.actions';
import { map, of, pipe, switchMap, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getInputnsameSelector } from './selectors';

@Injectable()
export class GetUsernameFromLocalStorageEffect {
  getUsernameInputFromLocalStorage = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getUsernameInputAction),
        switchMap(() => {
          const name = JSON.parse(localStorage.getItem('usernameInput'));
          console.log(name);
          if (name) {
            const inreduxname = this.store.pipe(select(getInputnsameSelector));
            inreduxname.subscribe((data) => {
              console.log(data);
              if (data === null) {
                this.store.dispatch(setUsernameInputAction({ username: name }));
              }
            });
          }
          return name;
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
