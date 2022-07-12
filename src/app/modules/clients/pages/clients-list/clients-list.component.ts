import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, Gender } from '../../../../models/client.model';
import { LazyLoadEvent } from 'primeng/api';

interface TableCustomer {
  id: number;
  name: string;
  gender: Gender;
  personalNumber: string;
  mobileNumber: number;
  legalAddress: string;
  physicalAddress: string;
  photo?: string;
}

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  public clients: TableCustomer[] = [];
  public loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => {
      this.clients = data['clients'].entities.map((el:Client) => ({
        id: el.id,
        name: el.firstName + " " + el.lastName,
        gender: el.gender,
        personalNumber: el.personalNumber,
        mobileNumber: el.mobileNumber,
        legalAddress: el.legalAddress.country + ", " + el.legalAddress.city + ", " + el.legalAddress.address,
        physicalAddress: el.physicalAddress.country + ", " + el.physicalAddress.city + ", " + el.physicalAddress.address,
        photo: el.photo
      }));
    })
  }

  loadClients(event: LazyLoadEvent) {
    //console.log(event);
  }
}
