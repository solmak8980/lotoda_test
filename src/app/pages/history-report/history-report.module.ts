import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryReportPageRoutingModule } from './history-report-routing.module';

import { HistoryReportPage } from './history-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryReportPageRoutingModule
  ],
  declarations: [HistoryReportPage]
})
export class HistoryReportPageModule {}
