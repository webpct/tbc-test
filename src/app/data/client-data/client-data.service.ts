import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Client } from '../../models/client.model';
import { PaginationResponse } from '../../models/pagination-response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(public httpClient: HttpClient) { }

  private convertClientToFormData (client: Client): FormData {
    const formData = new FormData();
    formData.append('firstName', client.firstName);
    formData.append('lastName', client.lastName);
    formData.append('gender', client.gender);
    if (client.id) formData.append('_id', client.id);
    formData.append('personalNumber', client.personalNumber);
    formData.append('mobileNumber', client.mobileNumber.toString());
    formData.append('legalAddress', JSON.stringify({
      country: client.legalAddress.country,
      city: client.legalAddress.city,
      address: client.legalAddress.address,
    }));
    formData.append('physicalAddress', JSON.stringify({
      country: client.physicalAddress.country,
      city: client.physicalAddress.city,
      address: client.physicalAddress.address,
    }));
    formData.append('photoPath', '123');

    return formData;
  }

  findClient(id: string): Observable<Client> {
    return this.httpClient.get<PaginationResponse<Client>>(`${environment.apiUrl}/clients?top=100000000000000`)
      .pipe(map((data: any) => {
        try {
          const { _id, ...client } = data.entities.filter((client: any) => client._id === id)[0];
          return {
            ...client,
            id: _id
          }
        } catch (err) {
          return null;
        }
      }))
  }

  findAllClient(options: {
    top: number,
    bot: number
  } = { top: 10, bot: 0 }): Observable<PaginationResponse<Client>> {
    return this.httpClient.get<PaginationResponse<Client>>(`${environment.apiUrl}/clients?top=${options.top}&bot=${options.bot}`)
      .pipe(map(data => {
        const entities = data.entities.map(({ _id, ...client }: any) => ({ ...client, id: _id }))
        data.entities = entities;
        return data;
      }))
  }

  createClient(client: Client) {
    return this.httpClient.post(`${environment.apiUrl}/clients`, this.convertClientToFormData(client));
  }

  public updateClient(client: Client):Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/clients`, this.convertClientToFormData(client));
  }

  public deleteClient(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/clients`, {
      body: { id }
    });
  }
}
