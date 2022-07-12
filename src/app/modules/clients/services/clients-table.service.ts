import { Injectable } from '@angular/core';
import { Client, Gender } from '../../../models/client.model';
import { ClientDataService } from '../../../data/client-data/client-data.service';
import { map, Observable } from 'rxjs';
import { PaginationResponse } from '../../../models/pagination-response.model';

export interface ClientsTableView {
  id: string;
  name: string;
  gender: Gender;
  personalNumber: string;
  mobileNumber: number;
  legalAddress: string;
  physicalAddress: string;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsTableService {

  constructor(
    public clientDataService: ClientDataService
  ) {}

  public getClientsList(options: {
    top: number,
    bot: number
  } = { top: 10, bot: 0 }): Observable<PaginationResponse<ClientsTableView>> {
   return this.clientDataService.findAllClient(options)
      .pipe(map(data => {
        const clientsEntities = data.entities.map((client:Client) => ({
          id: client.id,
          name: client.firstName + " " + client.lastName,
          gender: client.gender,
          personalNumber: client.personalNumber,
          mobileNumber: client.mobileNumber,
          legalAddress: client.legalAddress.country + ", " + client.legalAddress.city + ", " + client.legalAddress.address,
          physicalAddress: client.physicalAddress.country + ", " + client.physicalAddress.city + ", " + client.physicalAddress.address,
          photo: client.photo
        }));
        return { ...data, entities: clientsEntities };
      }))
  }
}
