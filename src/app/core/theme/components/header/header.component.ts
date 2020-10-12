import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from '../../../auth/user.model';
import { UserService } from '../../../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {
  locales = {
    'en-US': 'English',
    'ua-UA': 'Українська'
  };
  isShowDropdown = false;
  showCollapseNavbar = false;
  user: UserModel;

  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.user.subscribe( u => this.user = u);
  }

  changeLanguage(locale: string) {
    this.translateService.use(locale);
    this.isShowDropdown = false;
  }

  getCurrentLang() {
    return this.locales[this.translateService.currentLang];
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}
