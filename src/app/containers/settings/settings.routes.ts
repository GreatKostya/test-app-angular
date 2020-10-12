import { Routes } from '@angular/router';
import { UserGuard } from '../../core/auth/user.guard';

import { SettingsComponent } from './settings.component';

export const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [
      UserGuard
    ]
  }
];
