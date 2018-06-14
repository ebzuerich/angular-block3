import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string;

  constructor(public el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.onHighlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.onHighlight('black');
  }

  public onHighlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
