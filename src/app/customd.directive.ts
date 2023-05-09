import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomd]'
})
export class CustomdDirective {

  constructor(e:ElementRef) { 
    e.nativeElement.style.border = "2px solid red"
  }

}
