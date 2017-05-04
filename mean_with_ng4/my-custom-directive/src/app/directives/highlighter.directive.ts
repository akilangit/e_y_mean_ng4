import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @HostListener("click", ['$event']) onElementClick(){
    console.log(event)
    alert("fired on hover");
  };

  //dependency injection
  constructor( private elementRef: ElementRef, private renderer: Renderer) {
    console.log( elementRef );
    elementRef.nativeElement.style.backgroundColor = "Yellow";

    //but, there's an angular way
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 
      'background-color',
      'red'
    );

    //let's add few more functionality inside - let's add powered by message
    let buttonElement = this.renderer.createElement(this.elementRef.nativeElement, 'span');
    this.renderer.createText(buttonElement, 'Powered by Highlighter Directive');
    this.renderer.setElementProperty(buttonElement, 'style', 'float:right; font-size:10px; color: white;');
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 
      'height',
      '300px'
    );
  }

}
