import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  public url = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/W-C0033-001?Authorization=CWA-48BE369A-3259-4C5A-B84F-3A55951FA64E&limit=3&format=JSON&locationName=&phenomena=%E5%A4%A7%E9%9B%A8';
  
  constructor(private http:HttpClient) {}

  public getWeatherData(): Observable<any> {
    return this.http.get(this.url);
  }

  // public getWeatherData() {
  //   return this.http.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/W-C0033-001?Authorization=CWA-48BE369A-3259-4C5A-B84F-3A55951FA64E&limit=3&format=JSON&locationName=&phenomena=%E5%A4%A7%E9%9B%A8');
  // }
}
