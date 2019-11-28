import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from '../services/auth-service.service';
import { User } from '../user';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant: any;
  faHeart = faHeart;
  user: User = new User();
  isFavourited = false;

  constructor(private authService: AuthServiceService, private routerService: RouterService) { }

  ngOnInit() {
    this.authService.getUserData(parseInt(this.authService.getBearerToken())).subscribe(
      data => this.user = data,
      error => console.log(error.message));

    this.getFavourites();
  }

  addToFavourites() {
    if (parseInt(this.authService.getBearerToken())) {
      // this.authService.getUserData(parseInt(this.authService.getBearerToken())).subscribe(
      //   data => {
      //     this.user = data;
      if (this.user.favourites.findIndex(res => res === this.restaurant) === -1) {
        this.user.favourites.push(this.restaurant);
        this.authService.updateUserData(this.user).subscribe(
          updatedData => console.log(updatedData),
          error => console.log(error.message)
        );
        //   },
        //   error => console.log(error.message)
        // )
      } else {
        this.user.favourites.splice(this.user.favourites.findIndex(res => res === this.restaurant), 1);
        this.authService.updateUserData(this.user).subscribe(
          updatedData => console.log(updatedData),
          error => console.log(error.message)
        );
      }
    } else {
      this.routerService.goToLoginPage();
    }

  }

  getFavourites() {
    if (this.user.favourites.findIndex(res => res === this.restaurant) !== -1) {
      return 'red';
    }
  }

}
