import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ReportingComponent } from './reporting.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ReportingComponent
  ],
  declarations: [
    ReportingComponent
  ]
})
export class ReportingModule {}
