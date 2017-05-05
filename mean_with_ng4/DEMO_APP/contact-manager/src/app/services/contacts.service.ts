import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  contactList:any  = [];
  constructor(private http: Http) { }

  create(form: NgForm) {
    // this.contactList.push(form);
    // console.log(this.contactList);
    // return this.contactList;

    console.log("inside getContacts()");
    return this.http.post("http://localhost:3000/addContact", form)
              .map(response => {
                console.log(response);
                return response.json()
              });
  }

  getContacts() {
    console.log("inside getContacts()");
    return this.http.get("http://localhost:3000/")
              .map(response => {
                console.log(response);
                return response.json()
              });
  }

  delete(contactId, contactData){
    var url = "http://localhost:3000/deleteContact/"+ contactId;
    return this.http.patch(url, contactData)
              .map(response => {
                console.log(response);
                return response.json()
              });
  }
}
