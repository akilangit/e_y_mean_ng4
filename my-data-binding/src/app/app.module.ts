import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiComponent } from './si/si.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EvtBindingComponent } from './evt-binding/evt-binding.component';
import { CustomPropertyBindingComponent } from './custom-property-binding/custom-property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SiComponent,
    PropertyBindingComponent,
    EvtBindingComponent,
    CustomPropertyBindingComponent,
    TwoWayBindingComponent
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
