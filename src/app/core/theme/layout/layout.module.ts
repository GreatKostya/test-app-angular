import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderModule } from '../components/header/header.module';

import { AppLayoutComponent } from './layout.component';

@NgModule({
	imports: [
		CommonModule,
		HeaderModule,
		FooterModule
	],
  exports: [
    AppLayoutComponent
  ],
  declarations: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule {}
