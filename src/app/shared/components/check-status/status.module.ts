import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatusComponent } from './status.component';

@NgModule({
  exports: [
    StatusComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    StatusComponent
  ]
})
export class StatusModule {}
