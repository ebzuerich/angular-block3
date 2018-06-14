import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appInputDateParser]',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateParserDirective),
      multi: true
}]
})
export class InputDateParserDirective implements ControlValueAccessor {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  onChangeCallBack: Function;

  @HostListener('input', ['$event.target.valueAsDate']) input(value: Date) {
    this.onChangeCallBack(value);
  }

  writeValue(value: Date): void {
    if (value) {
      const date = new Date(value);
      this.renderer.setProperty(this.elementRef.nativeElement, 'valueAsDate', date);
    }
  }
  registerOnChange(fn: Function): void {
    this.onChangeCallBack = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}
