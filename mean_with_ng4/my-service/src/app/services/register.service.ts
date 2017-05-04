import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs';

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

  // getMessage(){
  //     console.log("getting Message on onNgInit");
  //     //return this.http.get("/message.json");
  //     return this.http.get("https://ng2-msg-service.firebaseio.com/message.json");
  // }
}
