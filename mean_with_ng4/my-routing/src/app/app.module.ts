import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'; // for setting up router

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

//Step 2: Let's have the routes configured -- Import Routes 
const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES) // Step3: registering routes -- Import RouterModule properly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
