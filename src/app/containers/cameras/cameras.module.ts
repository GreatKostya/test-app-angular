import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { StatusModule } from '../../shared/components/check-status/status.module';
import { CamerasComponent } from './cameras.component';

@NgModule({
  imports: [
    CommonModule,
    StatusModule,
    TranslateModule
  ],
  exports: [
    CamerasComponent
  ],
  declarations: [
    CamerasComponent
  ]
})
export class CamerasModule {}
