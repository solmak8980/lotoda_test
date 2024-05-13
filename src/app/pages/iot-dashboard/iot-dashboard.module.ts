import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IotDashboardPageRoutingModule } from './iot-dashboard-routing.module';

import { IotDashboardPage } from './iot-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IotDashboardPageRoutingModule
  ],
  declarations: [IotDashboardPage]
})
export class IotDashboardPageModule {}
