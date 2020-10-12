import { Routes } from '@angular/router';
import { UserGuard } from '../../core/auth/user.guard';

import { ReportingComponent } from './reporting.component';

export const reportingRoutes: Routes = [
  {
    path: 'reporting',
    component: ReportingComponent,
    canActivate: [
      UserGuard
    ]
  }
];
