import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RegisterService {
  userData: any = [];

  constructor(private http: Http) { }

  onRegister(form: NgForm): RegisterService {
    console.log("Inside Service");
    console.log(form);
    this.userData.push(form.value);

    //return this.http.post("/api/register", this.userData);

    return this.userData;
  }
}
