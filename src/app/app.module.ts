import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamerasModule } from './containers/cameras/cameras.module';
import { LoginModule } from './containers/login/login.module';
import { ReportingModule } from './containers/reporting/reporting.module';
import { SettingsModule } from './containers/settings/settings.module';
import { I18nModule } from './core/i18n/i18n.module';
import { AppLayoutModule } from './core/theme/layout/layout.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    ReportingModule,
    SettingsModule,
    LoginModule,
    I18nModule,
    CamerasModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
