import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { TextclipperPipe } from './pipes/textclipper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    TextclipperPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
