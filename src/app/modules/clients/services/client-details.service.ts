import { Injectable } from '@angular/core';
import { map, switchMap, take } from 'rxjs';
import { Client } from '../../../models/client.model';
import { ClientDataService } from '../../../data/client-data/client-data.service';
import { AccountDataService } from '../../../data/account-data/account-data.service';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsService {

  constructor(
    private clientDataService: ClientDataService,
    private accountDataService: AccountDataService,
  ) { }

  public getClientsDetails(clientId: string) {
    return this.clientDataService.findClient(clientId).pipe(
      take(1),
      switchMap((client: Client) => {
        return this.accountDataService.findAllAccounts(client?.personalNumber)
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


