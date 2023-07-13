import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resource/models/RequestLogin';
import { AlertService } from 'src/app/resource/services/alert.service';
import { LoginService } from 'src/app/resource/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(["dashboard"]);
      },
      (httpError) => {
        this.alertService.error(httpError.error.message);
        console.error(httpError);
      }
    );
  }
}
