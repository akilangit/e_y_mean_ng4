import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  flag = true;

  navMenus = [
    'Home',
    'Products',
    'Services',
    'About',
    'Contact'
  ]

  age = 20;

  onToggle() {
    console.log("toggle");
    this.flag = !this.flag;
  }
  constructor() { }

  ngOnInit() {
  }

}
