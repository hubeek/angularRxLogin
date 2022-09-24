import { CurrentUserInterface } from '../../shared/types/currentUser'
import { BackendErrorsInterface } from '../../shared/types/backendErrorsInterface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null
}
