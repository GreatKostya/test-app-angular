import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../core/auth/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers: [
    FormBuilder
  ]
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: this.fb.control(null),
      password: this.fb.control(null),
    });
  }

  submit() {
    this.userService.login(this.form.value);
    this.router.navigate(['cameras']);
  }
}
