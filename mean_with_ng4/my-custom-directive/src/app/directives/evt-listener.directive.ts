import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvtListener]'
})
export class EvtListenerDirective {
  @HostListener("mouseover", ['$event']) onElementHover(){
    console.log(event)
    alert("fired on hover");
  };
  constructor() { }

}
