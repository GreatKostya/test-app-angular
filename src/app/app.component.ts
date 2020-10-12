import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    ThemeService
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en-US');
    this.translateService.use('en-US');
    this.themeService.loadStyle('dark-style');
  }
}
