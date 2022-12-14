import { Component, OnInit } from '@angular/core'
import { Observable, async } from 'rxjs'
import { CurrentUserInterface } from '../../../../types/currentUser'
import { select, Store } from '@ngrx/store'
import {
  currentUserSelector,
  isAnonymousInSelector,
  isLoggedInSelector,
} from '../../../../../auth/store/selectors'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousInSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
