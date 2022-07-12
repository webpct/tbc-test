import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account, AccountStatus, AccountType } from '../../../../models/account.model';
import { Currency } from '../../../../models/currency.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tbc-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @Input()
  public account: Account;
  @Input()
  public readonly = false;
  @Input()
  public isLoading = false;
  @Output()
  public closeAccount: EventEmitter<Account> = new EventEmitter();
  @Output()
  public createAccount: EventEmitter<Account> = new EventEmitter();

  public accountForm: FormGroup;

  public accountOptions = [
    {name: AccountType.current, value: AccountType.current },
    {name: AccountType.saving, value: AccountType.saving },
    {name: AccountType.cumulative, value: AccountType.cumulative },
  ];

  public currencyOptions = [
    { name: Currency.GEL, value: Currency.GEL },
    { name: Currency.EUR, value: Currency.EUR },
    { name: Currency.USD, value: Currency.USD },
    { name: Currency.RUB, value: Currency.RUB },
  ]

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      accountNumber: new FormControl(this.account?.accountNumber || ''),
      clientNumber: new FormControl(this.account?.clientNumber || ''),
      accountType: new FormControl(this.account?.accountType || AccountType.current, Validators.required),
      currency: new FormControl(this.account?.currency || Currency.GEL, Validators.required),
      accountStatus: new FormControl(this.account?.accountStatus || AccountStatus.active, Validators.required),
    })
  }

  get status() {
    return this.account?.accountStatus;
  }

  get isAccountActive() {
    return this.account?.accountStatus === AccountStatus.active
  }

  get accountNumber() {
    return this.account?.accountNumber;
  }

  public submitAccount(){
    this.createAccount.emit(this.accountForm.value);
  }
}
