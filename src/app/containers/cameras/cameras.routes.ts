import { Routes } from '@angular/router';

import { UserGuard } from '../../core/auth/user.guard';
import { CamerasComponent } from './cameras.component';

export const camerasRoutes: Routes = [
  {
    path: 'cameras',
    component: CamerasComponent,
    canActivate: [
      UserGuard
    ]
  }
];
