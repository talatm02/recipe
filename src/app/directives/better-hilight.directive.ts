import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHilight]'
})
export class BetterHilightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 
  @HostBinding('style.color') color: string = 'black'; 
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseenter(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = 'blue'; 
    this.color = 'white'; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'transparent'; 
    this.color = 'black'; 
    
    
  }

}
