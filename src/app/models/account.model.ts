import { Currency } from './currency.model';

export enum AccountType {
  current = 'Current',
  saving = 'Saving',
  cumulative = 'Cumulative'
}

export enum AccountStatus {
  active = 'Active',
  closed = 'Closed'
}

export interface Account {
  accountNumber: number;
  clientNumber: string;
  accountType: AccountType;
  currency: Currency;
  accountStatus: AccountStatus;
}
