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


    //but, there's an angular way
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement, 
    //   'background-color',
    //   'red'
    // );

    //let's add few more functionality inside - let's add powered by message
    // let buttonElement = this.renderer.createElement(this.elementRef.nativeElement, 'span');
    // this.renderer.createText(buttonElement, 'Powered by colorize Directive');
    // this.renderer.setElementProperty(buttonElement, 'style', 'float:right; font-size:10px; color: white;');
    
  }

}
