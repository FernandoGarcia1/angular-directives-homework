import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnStyle]'
})
export class OnStyleDirective implements OnInit{

  @HostListener('mouseenter') mouseenter(){
    this.renderer.addClass(this.element.nativeElement, 'increment-size');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.removeClass(this.element.nativeElement, 'increment-size');
  }
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    
  } 
}
