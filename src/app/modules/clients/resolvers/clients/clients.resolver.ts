import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';
import { PaginationResponse } from '../../../../models/pagination-response.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolver implements Resolve<PaginationResponse<Client>> {
  constructor(private clientDataService: ClientDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginationResponse<Client>> {
    return this.clientDataService.findAllClient();
  }
}
