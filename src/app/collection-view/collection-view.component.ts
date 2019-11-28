import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.css']
})
export class CollectionViewComponent implements OnInit {

  collections: Array<any>;

  constructor(private restaurantsService: RestaurantsService) {
    this.collections = [];
  }

  ngOnInit() {
    this.fetchRestaurants();
  }

  fetchRestaurants() {
    this.restaurantsService.getCollections().subscribe(
      data => {
        console.log(data.restaurants);
        this.collections = data.restaurants;
        // console.log(this.collections);s
      },
      error => console.log(error.message)
    );
  }

}
