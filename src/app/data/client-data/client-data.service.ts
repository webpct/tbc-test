import { Injectable } from '@angular/core';
import { Client, Gender } from '../../models/client.model';
import { map, Observable, of } from 'rxjs';
import { PaginationResponse } from '../../models/pagination-response.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

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

  findClient(id: number): Observable<Client> {
    return this.httpClient.get<PaginationResponse<Client>>(`${environment.apiUrl}/clients?top=10`)
      .pipe(map((data: any) => {
        const { _id, ...client } = data.entities.filter((client: any) => client._id === id)[0];
        return {
          ...client,
          id: _id
        }
      }))
  }

  findAllClient(params: any = {}): Observable<PaginationResponse<Client>> {
    return this.httpClient.get<PaginationResponse<Client>>(`${environment.apiUrl}/clients?top=10`)
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
    console.log(client)
    return this.httpClient.put(`${environment.apiUrl}/clients`, this.convertClientToFormData(client));
  }

  public deleteClient(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/clients`, {
      body: { id }
    });
  }
}
