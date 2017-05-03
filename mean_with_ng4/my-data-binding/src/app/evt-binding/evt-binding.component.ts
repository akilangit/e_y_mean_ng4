import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evt-binding',
  templateUrl: './evt-binding.component.html',
  styleUrls: ['./evt-binding.component.css']
})
export class EvtBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTextClick(event) {
    alert("Clicked on the para");
    console.log(event);
  }
}
