import { AuthStateInterface } from '../../auth/types/authState.interface';
import { InputNameInterface } from '../../hjh/store/types/inputNameInterface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  hjh: InputNameInterface;
}
