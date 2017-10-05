import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHilight]'
})
export class BasicHilightDirective {

  constructor(private eleRef: ElementRef) { }

  ngOnInit(){
    this.eleRef.nativeElement.style.backgroundColor = 'green';
  }
}
