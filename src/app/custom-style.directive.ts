// below added ElementRef 
import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  //below defining instance (el) of ElementRef element
  // you can apply any css property  on el instance
  constructor(private el:ElementRef) { 
    // el.nativeElement.style.color="red"
    //  el.nativeElement.style.color="green"
    //  el.nativeElement.style.display="none"
    //  el.nativeElement.style.border="1px solid red"
     el.nativeElement.style.background="yellow"
  }
 
}
