import { Injectable } from '@angular/core';
import { Client, Gender } from '../../models/client.model';
import { Observable, of } from 'rxjs';
import { PaginationResponse } from '../../models/pagination-response.model';

const mock = [
  {
    id: 1,
    firstName: 'Leo',
    lastName: 'Sartin',
    gender: Gender.Male,
    personalNumber: '123213',
    mobileNumber: 12312313,
    legalAddress: {
      country: 'Bulgaria',
      city: 'Parn',
      address: 'city street'
    },
    physicalAddress: {
      country: 'Bulgaria',
      city: 'Parn',
      address: 'city street'
    },
    photo: null,
  },
  {
    id: 2,
    firstName: 'Kardi',
    lastName: 'Bi',
    gender: Gender.Male,
    personalNumber: '123213',
    mobileNumber: 12312313,
    legalAddress: {
      country: 'Bulgaria',
      city: 'Parn',
      address: 'city street'
    },
    physicalAddress: {
      country: 'Bulgaria',
      city: 'Parn',
      address: 'city street'
    },
    photo: null,
  },
  {
    id: 3,
    firstName: 'Anatoly',
    lastName: 'Vasserman',
    gender: Gender.Male,
    personalNumber: '123213',
    mobileNumber: 12312313,
    legalAddress: {
      country: 'Bulgaria',
      city: 'Parn',
      address: 'city street'
    },
    physicalAddress: {
      country: 'Bulgaria',
      city: 'Parn',
      address: 'city street'
    },
    photo: null,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor() { }

  findClient(id: number): Observable<Client> {
    return of(mock[0]);
  }

  findAllClient(params: any = {}): Observable<PaginationResponse<Client>> {
    return of({
      entities: mock,
      pagination: {
        pages: 1,
        pageSize: 10,
        currentPage: 1
      }
    });
  }
}
