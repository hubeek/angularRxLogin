import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNameComponent } from './components/input-name/input-name.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../hjh/store/reducers';

import { PersistanceService } from '../shared/services/persistance.service';
import { SetUsernameInLocalStorageEffect } from './store/SetUsernameInLocalStorageEffect';
import { EffectsModule } from '@ngrx/effects';
import { GetUsernameFromLocalStorageEffect } from './store/GetUsernameFromLocalStorageEffect';

const routes = [{ path: 'hjh', component: InputNameComponent }];

@NgModule({
  declarations: [InputNameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('hjh', reducers),
    EffectsModule.forFeature([
      SetUsernameInLocalStorageEffect,
      GetUsernameFromLocalStorageEffect,
    ]),
  ],
  exports: [InputNameComponent],
  providers: [
    PersistanceService,
    SetUsernameInLocalStorageEffect,
    GetUsernameFromLocalStorageEffect,
  ],
})
export class InputNameModule {}
