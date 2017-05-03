import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  //private elementRef: ElementRef, public renderer: Renderer dep injection in constructor
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    console.log("Directive worked");
    //console.log(elementRef);
    //elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
