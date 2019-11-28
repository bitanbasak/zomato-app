import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthServiceService) { }

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
