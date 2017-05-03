// Step 2: Gets loaded for the index page - essential JS and styles for the index page
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//This is the decorator - NgModule decorator
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Step 3: this is where we tell angular that this is the root component for the index page.
})
export class AppModule { }
