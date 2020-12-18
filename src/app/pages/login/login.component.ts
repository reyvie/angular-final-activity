import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';
import { Login } from '../login/login-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentialForm: any;
  isLogged: any;

  logins: Login = {
    username: '',
    password: ''
  };

  constructor(private globalService: GlobalService, private titleService: Title, private route: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('MyTicket | Log in')
    console.log('getToken', this.globalService.getToken());
    console.log('getTokenCond', this.globalService.getToken() == '');
    if (this.globalService.getToken() != '') {
      this.route.navigate(['/']);
    }
    // if (this.globalService.getToken() != null || this.globalService.getToken() != '') {
    //   this.route.navigate(['/']);
    // }

    this.globalService.isLogged.subscribe(
      (logged: any) => {
        console.log('isLogged', logged);
        this.isLogged = logged
      }
    );
    console.log('old value:', this.logins)
    this.globalService.checkLogStatus();

    this.credentialForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }

  onLogin(): void {
    console.log('new value:', this.logins)
    this.globalService.httpLogin(this.logins);
    this.globalService.onHttpLogin.subscribe(
      (response: any) => {
        const token = response.token;
        this.globalService.setToken(token);
        console.log('Response: ', response);
        console.log('token: ',this.globalService.getToken());
        Swal.fire(
          'Logged In Successfully!',
          '',
          'success'
        )
      },
      (err: any) => {
        console.log('errorr', err)
        Swal.fire(
          'Incorrect Username or Password!',
          '',
          'warning'
        )
      }
    );
  }

}
