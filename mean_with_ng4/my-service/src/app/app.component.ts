import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationStatus : String;
  constructor(private registerService: RegisterService) {
  }

  onNgInit(){
    // this.registerService.getMessage()
    //     .subscribe(
    //       (response) => console.log(response),
    //       (error) => console.log(error)
    //     )

  }

  onFormSubmit(form: NgForm){
    console.log("Called onFormSubmit");
    console.log(form.value);
    this.registerService.onRegister(form.value)
        .subscribe(
          (response) => {
            console.log(response);
            this.registrationStatus = response.message
          },
          (error) => {
            console.log(error)
            this.registrationStatus = error.message
          }
        )
    
  }
}
