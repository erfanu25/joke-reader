import {Component, OnInit} from '@angular/core';
import {Jokes} from './model/jokes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('testObject', JSON.stringify(Jokes));
  }

  addJokes(): void {
    this.router.navigate(['joke']);
  }

  jokeReader(): void {
    this.router.navigate(['jokeReader']);
  }

}
