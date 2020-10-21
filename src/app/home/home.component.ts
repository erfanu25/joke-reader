import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Jokes} from "../model/jokes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jokes: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    this.jokes = JSON.parse(retrievedObject);
  }

  editJokes(index): void {
    this.router.navigate(['joke', index]);
  }

  playJokes(joke): void {

  }

}
