import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopheadingComponent } from './components/topheading/topheading.component';

import { AppRoutingModule } from './app-routing.module';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './components/technews/technews.component';
import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { EntertainmentnewsComponent } from './components/entertainmentnews/entertainmentnews.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    SportsnewsComponent,
    FooterComponent,
    EntertainmentnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
