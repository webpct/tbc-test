import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../../../../models/pagination-response.model';
import { ClientsTableService, ClientsTableView } from '../../services/clients-table.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolver implements Resolve<PaginationResponse<ClientsTableView>> {
  constructor(private clientsTableService: ClientsTableService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginationResponse<ClientsTableView>> {
    return this.clientsTableService.getClientsList();
  }
}
