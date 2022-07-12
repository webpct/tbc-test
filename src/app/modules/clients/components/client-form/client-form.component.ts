import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client, Gender } from '../../../../models/client.model';

@Component({
  selector: 'tbc-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  @Input()
  public isLoading: boolean = false;
  @Input()
  public title: string = 'Create client';
  @Input()
  public client: Client;
  @Input()
  public readonly = false;
  @Input()
  public toggable = false;
  @Output()
  public submitForm: EventEmitter<Client> = new EventEmitter();

  public clientForm: FormGroup;
  public genderOptions = [
    {name: Gender.Male, value: Gender.Male,},
    {name: Gender.Female, value: Gender.Female },
  ];

  //TODO create custom validator
  private latinAndSpacesRegexp = /^[a-zA-Z\s]*$/;
  private nameValidators = [
    Validators.required,
    Validators.min(2),
    Validators.max(50),
    Validators.pattern(this.latinAndSpacesRegexp)
  ];
  private digitsOnlyRegexp = /^\d+$/;

  onSubmit() {
    if(!this.clientForm.valid) {
      this.clientForm.markAllAsTouched();
      return;
    }
    this.submitForm.emit({
      ...this.clientForm.value,
      mobileNumber: '5'+ this.clientForm.value.mobileNumber
    });
  }

  ngOnInit(): void {
    const mobileNumberDefault = this.client?.mobileNumber.toString().substring(1) || '';
    this.clientForm = new FormGroup({
      firstName: new FormControl(this.client?.firstName || '', this.nameValidators),
      lastName: new FormControl(this.client?.lastName || '', this.nameValidators),
      gender: new FormControl(this.client?.gender || Gender.Male, Validators.required),
      personalNumber: new FormControl(this.client?.personalNumber || `${+(new Date())}`.substring(2), [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern(this.digitsOnlyRegexp)
      ]),
      mobileNumber: new FormControl(mobileNumberDefault, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.pattern(this.digitsOnlyRegexp)
      ]),
      legalAddress: new FormGroup({
        country: new FormControl(this.client?.legalAddress.country || '', [Validators.required]),
        city: new FormControl(this.client?.legalAddress.city || '', [Validators.required]),
        address: new FormControl(this.client?.legalAddress.address || '', [Validators.required]),
      }),
      physicalAddress: new FormGroup({
        country: new FormControl(this.client?.physicalAddress.country || '', [Validators.required]),
        city: new FormControl(this.client?.physicalAddress.city || '', [Validators.required]),
        address: new FormControl(this.client?.physicalAddress.address || '', [Validators.required]),
      }),
    })
  }
}
