import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import {
  getUsernameInputAction,
  setUsernameInputAction,
} from '../../store/inputname.actions';
import { getInputnsameSelector } from '../../store/selectors';
import { currentUserSelector } from '../../../auth/store/selectors';
import { Observable } from 'rxjs';
import { InputNameInterface } from '../../store/types/inputNameInterface';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
})
export class InputNameComponent implements OnInit {
  username$: Observable<string>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.username$ = this.store.pipe(select(getInputnsameSelector));
    this.store.dispatch(getUsernameInputAction());

  }

  setUsername($event: Event) {
    this.store.dispatch(
      setUsernameInputAction({
        username: ($event.target as HTMLInputElement).value,
      })
    );
  }
}
