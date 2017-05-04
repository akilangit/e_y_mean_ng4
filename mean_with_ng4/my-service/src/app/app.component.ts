import { Component } from '@angular/core';
import { RegisterService } from './services/register.service';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    this.registerService.onRegister(form)
        // .subscribe(
        //   (response) => console.log(response),
        //   (error) => console.log(error)
        // )
    
  }
}
