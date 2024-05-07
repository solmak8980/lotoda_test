import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthPage } from './auth.page';
import { AuthPageRoutingModule } from './auth-routing.module';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [AuthPage, FooterComponent],
  imports: [CommonModule, AuthPageRoutingModule, IonicModule],
})
export class AuthPageModule {}
