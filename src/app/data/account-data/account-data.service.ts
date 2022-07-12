import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Account } from '../../models/account.model';
import { PaginationResponse } from '../../models/pagination-response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(public httpClient: HttpClient) { }

  findAllAccounts(clientNumber: string): Observable<Account[]> {
    return this.httpClient
      .get<PaginationResponse<Account>>(`${environment.apiUrl}/accounts?top=100000000&clientNumber=${clientNumber}`)
      .pipe(map(value => value.entities))
  }

  createAccount(account: Account): Observable<any> {
    return this.httpClient
      .post(`${environment.apiUrl}/addAccount`, account)
  }

  closeAccount(accountId: string): Observable<any> {
    return this.httpClient
      .post(`${environment.apiUrl}/closeAccount`, {
        id: accountId
      })
  }
}
