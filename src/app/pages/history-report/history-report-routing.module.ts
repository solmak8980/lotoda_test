import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryReportPage } from './history-report.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryReportPageRoutingModule {}
