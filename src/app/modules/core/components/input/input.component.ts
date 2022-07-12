import { Component, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'tbc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input()
  public type: string = 'text';
  @Input()
  public label: string = '';
  @Input()
  public placeholder: string = '';
  @Input()
  public errorMessage: string = '';
  @Input()
  public before: string = '';
  @Input()
  public readonly: boolean = false;


  control: NgControl;
  disabled = false;
  value: string = '';
  touched = false;

  constructor(private inject: Injector) {}

  onTouched = () => {};

  onChange = (value: string) => {};

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  ngOnInit(): void {
    try {
      this.control = this.inject.get(NgControl);
    } catch (err) {
      console.error('<tbc-input/> component does\'t support usage outside of form context')
      throw err;
    }
  }

  onInputChange($event: any) {
    this.onChange($event.target?.value)
  }
}
