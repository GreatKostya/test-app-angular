import { Routes } from '@angular/router';
import { UserGuard } from '../../core/auth/user.guard';

import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      UserGuard
    ]
 }
];
