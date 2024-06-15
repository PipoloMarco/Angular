import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardLayoutComponent, UserComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
