import { Injectable } from '@angular/core';
import { Client, Gender } from '../../models/client.model';
import { Observable, of, timeout } from 'rxjs';
import { PaginationResponse } from '../../models/pagination-response.model';

const mock: Client[] = [
  {
    id: 1,
    firstName: 'Leo',
    lastName: 'Sartin',
    gender: Gender.Female,
    personalNumber: '12345678901',
    mobileNumber: 523456789,
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
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IMG_logo_%282017%29.svg/2880px-IMG_logo_%282017%29.svg.png',
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
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IMG_logo_%282017%29.svg/2880px-IMG_logo_%282017%29.svg.png',
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
    photo: undefined,
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
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next({
          entities: mock,
          pagination: {
            pages: 1,
            pageSize: 10,
            currentPage: 1
          }
        })
      }, 100)
    });
  }
}
