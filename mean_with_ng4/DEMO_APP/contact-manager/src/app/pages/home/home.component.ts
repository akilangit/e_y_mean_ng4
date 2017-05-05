import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactsService } from './../../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  contacts;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    
    this.contactService.getContacts()
            .subscribe(
                (contacts: any) => {
                    this.contacts = contacts.obj;
                }
            );
  }

  onContactAdd(form: NgForm){
    // this.contacts = this.contactService.create(form.value)
    this.contactService.create(form.value)
            .subscribe(
                (contacts: any) => {
                  debugger;
                    this.contacts.push(contacts.obj);
                }
            );
    console.log(form.value);
    form.resetForm();
  }

  onContactDelete(id, contactData){
    this.contactService.delete(id, contactData)
            .subscribe(
                (contacts: any) => {
                  this.contacts.push(contacts.obj);
                }
            );
  }
}
