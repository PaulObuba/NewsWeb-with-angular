import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

   //display news
   entertainmentnewsDisplay:any = [];

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result) => {
      return this.entertainmentnewsDisplay = result.articles;
    })
  }
}
