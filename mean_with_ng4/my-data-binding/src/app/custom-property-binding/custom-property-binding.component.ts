import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.css']
})
export class CustomPropertyBindingComponent implements OnInit {
  @Input() someNumber = 10; 
  
  constructor() { }

  ngOnInit() {
  }

}
