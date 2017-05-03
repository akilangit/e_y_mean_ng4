import { Directive , ElementRef, Renderer} from '@angular/core';

// ng g d colorizer -- is the command to create custom directives

@Directive({
  selector: '[appColorizer]' // custom attribute directive. Selectors such as #colorizer, .colorizer are also possible.
})
//Directives usually works like a plugin. Directives bring in additional functionalities. 
//This colorizer directive is going to add bg color to the text  color

export class ColorizerDirective {

  // Step 1: The following line has some dependency injection
  constructor(private elementRef: ElementRef, public renderer: Renderer) { 
    //Step 1: lets see what's here in elementRef
    console.log(elementRef);
    
    //lets see what's here in elementRef.nativeElement
    //console.log(elementRef.nativeElement);
    
    // now, we can do the following in raw JS.
    elementRef.nativeElement.style.backgroundColor = "Red";
    elementRef.nativeElement.style.height = "300px";

    //but, there's an angular way
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement, 
    //   'background-color',
    //   'red'
    // );

    //let's add few more functionality inside - let's add powered by message
    let buttonElement = this.renderer.createElement(this.elementRef.nativeElement, 'span');
    this.renderer.createText(buttonElement, 'Powered by colorize Directive');
    this.renderer.setElementProperty(buttonElement, 'style', 'float:right; font-size:10px; color: white;');
  }

}
