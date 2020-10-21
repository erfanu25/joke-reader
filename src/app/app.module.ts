import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import { JokeFormComponent } from './Joke/joke.form.component';
import {DropdownModule} from 'primeng/dropdown';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import { JokeReaderComponent } from './joke-reader/joke-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    HomeComponent,
    JokeReaderComponent
  ],
  imports: [
    BrowserModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ReactiveFormsModule,
    DropdownModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    RippleModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
