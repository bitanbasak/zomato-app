import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { User } from '../user';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegistered = false;
  loginForm: FormGroup;
  user: User = new User();
  constructor(private authService: AuthServiceService, private routerService: RouterService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;
    if (!this.isRegistered) {
      this.authService.authenticateUser().subscribe(
        data => {
          const userData = data.find(u => (u.email === this.user.email) && (u.password === this.user.password));
          if (userData) {
            this.authService.setBearerToken(userData.id);
            this.authService.isLoggedIn = true;
            this.routerService.goToHomePage();
          } else {
            console.log('User does not exist');
          }
        }
      );
      // this.authService.setBearerToken(userData.email);
    } else {
      console.log('user registration block');
      this.authService.registerUser(this.user).subscribe(
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
