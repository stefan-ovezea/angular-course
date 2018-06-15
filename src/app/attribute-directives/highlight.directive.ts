import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') highlight: string;

  constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlightElement(this.highlight || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlightElement(null);
    }

    private highlightElement(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

}
