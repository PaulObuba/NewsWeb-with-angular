import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor( private _services: NewsapiservicesService ) { }

  //display news
technewsDisplay:any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result) => {
        this.technewsDisplay = result.articles;
    })
  }

}
