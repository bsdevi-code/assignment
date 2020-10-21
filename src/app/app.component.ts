import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assigment';
  details: any = [];
  searchedKeyword: any = { main: '' };
  disabled: boolean = true;
  weatherList;
  constructor(private service: AppService) {

  }
  ngOnInit() {
    this.service.wetherData().subscribe(res => {
      this.details = res;
    });
  }
}
