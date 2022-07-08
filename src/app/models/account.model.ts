import { Currency } from './currency.model';

export enum AccountType {
  current = 'current',
  saving = 'saving',
  cumulative = 'cumulative'
}

export enum AccountStatus {
  active = 'active',
  closed = 'closed'
}

export interface Account {
  accountNumber: number;
  accountType: AccountType;
  currency: Currency;
  accountStatus: AccountStatus;
}
