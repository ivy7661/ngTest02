import { LoginService } from './../../@service/login.service';
import { Component } from '@angular/core';
import { LoginPost } from '../../@models/login.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginValue: LoginPost = {
    AccountName: '',
    Password: ''
  }

  constructor(private router: Router, private loginService: LoginService) {}

  public login() {
    this.loginService.jwtLogin(this.loginValue).subscribe((data: any) => {
      if (data.Status === 1) {
        localStorage.setItem('jwt', data);
        this.router.navigateByUrl('/store')
      }
    })
  }
}
