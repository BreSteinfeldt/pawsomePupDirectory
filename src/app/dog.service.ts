import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds/list/all`);
  }

  getRandomImage(breedName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/breed/${breedName}/images/random`);
  }
}