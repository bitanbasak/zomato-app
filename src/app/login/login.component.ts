import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegistered = false;
  loginForm: FormGroup;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.isRegistered) {
      this.authService.authenticateUser(this.loginForm.get('email').value, this.loginForm.get('password').value);
    } else {
      console.log("user registration block");
      this.authService.registerUser(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
        data => console.log(data),
        error => console.log(error.message)
      );
    }
    this.toggleIsRegistered();
  }

  toggleIsRegistered() {
    this.isRegistered = !this.isRegistered;
  }

}
