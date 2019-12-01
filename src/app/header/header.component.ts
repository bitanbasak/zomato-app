import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { faUserTie, faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUserTie = faUserTie;
  faHeart = faHeart;

  constructor(private authService: AuthServiceService, private userService: UserService) {
  }

  ngOnInit() {
    if (this.authService.getBearerToken()) {
      this.authService.isLoggedIn = true;
    }
  }

  onLogout() {
    this.authService.logoutUser();
    this.authService.isLoggedIn = false;
  }

}
