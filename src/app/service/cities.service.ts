import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { City } from '../model/city.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CitiesService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8081/api/cities';

  getAllCities(): Observable<City[]>  {
    return this.http.get<City[]>(this.baseUrl);
  }

  getFilterCities(page: number, size: number): Observable<any> {
    return this.http.get(this.baseUrl + '/queryByPage', {
      params: new HttpParams()
          .set('size', size.toString())
          .set('page', page.toString())
    }).pipe(
        map(res =>  res)
    );
  }
}
