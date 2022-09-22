import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './components/register/register.component'
import {LoginComponent} from './components/login/login.component'
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}

]
@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthModule {}
