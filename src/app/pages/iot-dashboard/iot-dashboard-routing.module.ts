import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IotDashboardPage } from './iot-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: IotDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IotDashboardPageRoutingModule {}
