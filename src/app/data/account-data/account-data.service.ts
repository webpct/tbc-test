import { Injectable } from '@angular/core';
import { Account, AccountStatus, AccountType } from '../../models/account.model';
import { Currency } from '../../models/currency.model';
import { map, Observable, of } from 'rxjs';
import { PaginationResponse } from '../../models/pagination-response.model';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client.model';
import { environment } from '../../../environments/environment';

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

  constructor(public httpClient: HttpClient) { }

  findAllAccounts(clientNumber: string): Observable<Account[]> {
    return this.httpClient
      .get<PaginationResponse<Account>>(`${environment.apiUrl}/accounts?top=100000&clientNumber=${clientNumber}`)
      .pipe(map(value => value.entities))
  }

  createAccount(account: Account): Observable<any> {
    return of();
  }

  closeAccount(accountId: string): Observable<any> {
    return this.httpClient
      .post(`${environment.apiUrl}/closeAccount`, {
        id: accountId
      })
  }
}
