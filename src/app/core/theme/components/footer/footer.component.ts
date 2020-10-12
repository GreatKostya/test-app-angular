import { Component } from '@angular/core';

import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  providers: [
    ThemeService
  ]
})
export class FooterComponent {
  constructor(private themeService: ThemeService) {}

  applyTheme(theme: string) {
    this.themeService.loadStyle(theme)
  }
}
