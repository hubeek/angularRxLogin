import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { BackendErrorsInterface } from '../../../shared/types/backendErrorsInterface'
import { select, Store } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import { LoginRequestInterface } from '../../types/loginRequestInterface'
import { loginAction } from '../../store/actions/login.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initilizeValues()
  }

  onSubmit(): void {
    const request: LoginRequestInterface = { user: this.form.value }
    this.store.dispatch(loginAction({ request }))
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  private initilizeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
