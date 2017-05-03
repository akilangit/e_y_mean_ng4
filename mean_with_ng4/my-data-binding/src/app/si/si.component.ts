import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.css']
})
export class SiComponent implements OnInit {
  //like this
  myString = "is simple.";

  constructor() {
    // you can manipulate inside constructor -- like this 
    //this.myString = "is simple !!!!";
  }

  ngOnInit() {
  }

}
