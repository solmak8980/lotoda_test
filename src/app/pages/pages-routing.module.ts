import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sld-dashboard',
    loadChildren: () =>
      import('./sld-dashboard/sld-dashboard.module').then(
        (m) => m.SLDDashboardPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profiles/profiles.module').then(
        (m) => m.ProfilesPageModule
      ),
  },
  {
    path: 'iot-dashboard',
    loadChildren: () => import('./iot-dashboard/iot-dashboard.module').then(m => m.IotDashboardPageModule)
  },
  {
    path: 'devices-management',
    loadChildren: () => import('./devices-management/devices-management.module').then(m => m.DevicesManagementPageModule)
  },
  {
    path: 'realtime-data',
    loadChildren: () => import('./realtime-data/realtime-data.module').then(m => m.RealtimeDataPageModule)
  },
  {
    path: 'alert-rules',
    loadChildren: () => import('./alert-rules/alert-rules.module').then(m => m.AlertRulesPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'history-report',
    loadChildren: () => import('./history-report/history-report.module').then(m => m.HistoryReportPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },

  { path: '', redirectTo: '/pages/sld-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/sld-dashboard' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule { }
