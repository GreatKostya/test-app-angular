import { Routes } from '@angular/router';

import { homeRoutes } from './containers/home/home.routes';
import { loginRoutes } from './containers/login/login.routes';
import { camerasRoutes } from './containers/cameras/cameras.routes';
import { reportingRoutes } from './containers/reporting/reporting.routes';
import { settingsRoutes } from './containers/settings/settings.routes';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: homeRoutes[0].path,
    pathMatch: 'full'
  },
  ...homeRoutes,
  ...loginRoutes,
  ...camerasRoutes,
  ...settingsRoutes,
  ...reportingRoutes
];
