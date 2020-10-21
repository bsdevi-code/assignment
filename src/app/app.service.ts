import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient ) { }
  // tslint:disable-next-line:typedef
  wetherData() {
    return this.http.get('https://samples.openweathermap.org/agro/1.0/weather/forecast?polyid=5aaa8052cbbbb5000b73ff66&appid=bb0664ed43c153aa072c760594d775a7' );
  }
}
