import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {JOKE_CATEGORIES, JOKE_FLAGS, JOKE_TYPES, Jokes} from '../model/jokes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.form.component.html'
})
export class JokeFormComponent implements OnInit {

  jokeForm: FormGroup;
  categories = JOKE_CATEGORIES;
  jokeType = JOKE_TYPES;
  flagList = JOKE_FLAGS;

  selectedFlags: string[] = [];
  category: string;
  type: string;
  content: string;
  delivery: string;
  isDelivery: boolean;

  jokes: any[];
  id: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = location.pathname.split('/')[2];
    if (this.id) {
      // Get back item  from local storage
      const retrievedObject = JSON.parse(localStorage.getItem('testObject'));

      // Get value
      this.category = retrievedObject[this.id].category;
      this.type = retrievedObject[this.id].type;
      this.content = retrievedObject[this.id].content;
      this.delivery = retrievedObject[this.id].delivery;
      this.selectedFlags = retrievedObject[this.id].flags;

      this.onTypeChange(this.type);
    }
  }

  submit(): void {
    const retrievedObject = localStorage.getItem('testObject');
    this.jokes = JSON.parse(retrievedObject);
    if (this.id) {
      this.jokes[this.id].content = this.content;
      this.jokes[this.id].category = this.category;
      this.jokes[this.id].type = this.type;
      this.jokes[this.id].delivery = this.delivery;
      this.jokes[this.id].flags = this.selectedFlags;
    } else {
      if (this.content) {
        this.jokes.push({
          content: this.content,
          category: this.category,
          type: this.type,
          delivery: this.delivery,
          flags: this.selectedFlags
        });
      }
    }
    localStorage.setItem('testObject', JSON.stringify(this.jokes));
    this.jokes = JSON.parse(localStorage.getItem('testObject'));
    this.router.navigate(['home']);
  }

  onTypeChange(event): void {
    this.isDelivery = event === 'Two Part';
  }

  back(): void {
    this.router.navigate(['home']);
  }

}
