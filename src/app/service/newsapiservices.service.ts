import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http: HttpClient ) { }

    //newsapiUrl
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=cf9ae03c07994077b5503e5930de298a';

   //techNewsapiUrl
  techApiUrl =  'https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=cf9ae03c07994077b5503e5930de298a';

   //sportsNewsapiUrl
  sportApiUrl =  'https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=cf9ae03c07994077b5503e5930de298a';

  entertainmentApiUrl = 'https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=cf9ae03c07994077b5503e5930de298a'; 

  //topHedding()
  topHeading():Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //techNews()
  techNews():Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  sportNews():Observable<any> {
    return this._http.get(this.sportApiUrl)
  }

  entertainmentNews():Observable<any> {
   return this._http.get(this.entertainmentApiUrl)
  }
}
