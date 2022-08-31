import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntertainmentnewsComponent } from './components/entertainmentnews/entertainmentnews.component';
import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';
import { TechnewsComponent } from './components/technews/technews.component';
import { TopheadingComponent } from './components/topheading/topheading.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent }, //home
  { path: 'technews', component: TechnewsComponent }, //tech
  { path: 'sportsnews', component: SportsnewsComponent }, //sport
  { path: 'entertainmentnews', component: EntertainmentnewsComponent }, //enterteainment
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
