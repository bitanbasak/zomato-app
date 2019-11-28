import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  apiKey: string;
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiKey = '057d9923b9032fff7b1f3ba562d2643f';
    this.apiUrl = 'https://developers.zomato.com/api/v2.1/search';
  }

  getCollections(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?entity_id=4&entity_type=city`, {
      headers: new HttpHeaders().set('user-key', this.apiKey)
    });
  }
}
