import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginBody } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: any;
  password: any;
  formData: LoginBody;

  constructor(private authService: AuthService, private router: Router) {
    this.formData = {
      email: '',
      password: '',
    };
  }

  Register() {
    try {
      this.formData.email = this.email;
      this.formData.password = this.password;

      this.authService.register(this.formData);
    } catch (error) {
      alert(error);
    }
  }

  ngOnInit() {
  }

}
