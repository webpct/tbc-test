import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';
import { PaginationResponse } from '../../../../models/pagination-response.model';
import { AccountDataService } from '../../../../data/account-data/account-data.service';
import { Account } from '../../../../models/account.model';

interface ClientDetailsData {
  client: Client,
  accounts: Account[]
}

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsResolver implements Resolve<ClientDetailsData> {
  constructor(
    private clientDataService: ClientDataService,
    private accountDataService: AccountDataService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ClientDetailsData> {
    const clientId = route.params['id'];
    return this.clientDataService.findClient(clientId).pipe(
      take(1),
      switchMap((client: Client) => {
        return this.accountDataService.findAllAccounts(client.personalNumber)
          .pipe(
            take(1),
            map((accounts => ({
              accounts: accounts,
              client,
            })))
          )
      })
    );
  }
}
