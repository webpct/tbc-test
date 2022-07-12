import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../../models/client.model';
import { Account } from '../../../../models/account.model';
import { ClientDetailsService } from '../../services/client-details.service';

interface ClientDetailsData {
  client: Client,
  accounts: Account[]
}

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsResolver implements Resolve<ClientDetailsData> {

  constructor(
    public clientDetailsService: ClientDetailsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ClientDetailsData> {
    const clientId = route.params['id'];
    return this.clientDetailsService.getClientsDetails(clientId)
  }
}
