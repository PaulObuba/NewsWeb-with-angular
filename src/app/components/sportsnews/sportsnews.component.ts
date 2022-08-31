import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  //sportnewsDisplay
  sportnewsDisplay:any = [];

  ngOnInit(): void {
    this._service.sportNews().subscribe((result) => {
      return this.sportnewsDisplay = result.articles;
    })
  }

}
