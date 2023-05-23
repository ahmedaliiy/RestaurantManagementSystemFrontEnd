import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resturant } from './resturant.interface';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getResturants(): Observable<Resturant[]> {
    return this.http.get<Resturant[]>(`${this.apiUrl}/resturant`);
  }

  getResturantById(id: number): Observable<Resturant> {
    return this.http.get<Resturant>(`${this.apiUrl}/resturant/${id}`);
  }

  createResturant(resturant: Resturant): Observable<Resturant> {
    return this.http.post<Resturant>(`${this.apiUrl}/resturant`, resturant);
  }

  updateResturant(resturant: Resturant): Observable<Resturant> {
    return this.http.put<Resturant>(`${this.apiUrl}/resturant/${resturant.id}`, resturant);
  }

  deleteResturant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/resturant/${id}`);
  }
}