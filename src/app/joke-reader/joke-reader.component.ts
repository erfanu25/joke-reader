import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-joke-reader',
  templateUrl: './joke-reader.component.html',
  styleUrls: ['./joke-reader.component.css']
})
export class JokeReaderComponent implements OnInit {

  selectedFlags: string[] = [];
  category: string;
  content: string;
  delivery: string;
  retrievedObject: any;
  index: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    this.index = location.pathname.split('/')[2];
    if (this.index) {
      // Get value
      this.getDataFromLocalStorage(this.index);
    } else {
      const random = Math.floor(Math.random() * this.retrievedObject.length);
      this.index = random;
      // Get value
      this.getDataFromLocalStorage(random);
    }
  }

  getDataFromLocalStorage(index): void {
    this.category = this.retrievedObject[index].category;
    this.content = this.retrievedObject[index].content;
    this.selectedFlags = this.retrievedObject[index].flags;

    setTimeout(() => {
      this.delivery = this.retrievedObject[index].delivery;
    }, 3000);
  }

  back(): void {
    this.router.navigate(['home']);
  }

  nextJoke(): void {
    this.index++;
    if (this.index > this.retrievedObject.length - 1) {
      this.index = 0;
    }
    this.category = this.retrievedObject[this.index].category;
    this.content = this.retrievedObject[this.index].content;
    this.delivery = this.retrievedObject[this.index].delivery;
    this.selectedFlags = this.retrievedObject[this.index].flags;
  }

}
