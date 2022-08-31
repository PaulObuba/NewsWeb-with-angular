import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 menuicon: boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.menuicon = !this.menuicon;
  }
}
