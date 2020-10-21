import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JokeFormComponent} from './Joke/joke.form.component';
import {HomeComponent} from "./home/home.component";
import {JokeReaderComponent} from "./joke-reader/joke-reader.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'joke', component: JokeFormComponent },
  { path: 'joke/:id', component: JokeFormComponent },
  { path: 'jokeReader', component: JokeReaderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
