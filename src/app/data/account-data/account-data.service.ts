import { Injectable } from '@angular/core';
import { Account, AccountStatus, AccountType } from '../../models/account.model';
import { Currency } from '../../models/currency.model';
import { Observable, of } from 'rxjs';
import { PaginationResponse } from '../../models/pagination-response.model';

const mock: Account[] = [
  {
    accountNumber: 123,
    accountType: AccountType.cumulative,
    currency: Currency.EUR,
    clientNumber: 123,
    accountStatus: AccountStatus.closed,
  },
  {
    accountNumber: 2,
    accountType: AccountType.current,
    clientNumber: 123,
    currency: Currency.RUB,
    accountStatus: AccountStatus.active,
  },
  {
    accountNumber: 15,
    clientNumber: 123,
    accountType: AccountType.cumulative,
    currency: Currency.USD,
    accountStatus: AccountStatus.closed,
  },
  {
    accountNumber: 30,
    accountType: AccountType.saving,
    clientNumber: 123,
    currency: Currency.EUR,
    accountStatus: AccountStatus.active,
  },
  {
    accountNumber: 12,
    accountType: AccountType.current,
    clientNumber: 123,
    currency: Currency.EUR,
    accountStatus: AccountStatus.active,
  }
];


@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor() { }

  findAccount(id: number): Observable<Account> {
    return of(mock[0]);
  }

  findAllAccounts(options: any = {}): Observable<PaginationResponse<Account>> {
    return of({
      entities: mock,
      pagination: {
        pages: 1,
        pageSize: 10,
        currentPage: 1
      }
    });
  }
}
