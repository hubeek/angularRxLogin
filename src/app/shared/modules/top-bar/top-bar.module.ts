import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { AppRoutingModule } from '../../../app-routing.module'

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
