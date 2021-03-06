import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {}
