import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';

@Component({
  selector: 'tbc-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  public isLoading = true;
  public currentClient: Client;

  constructor(public clientDataService: ClientDataService) { }

  ngOnInit(): void {
    this.clientDataService.findClient(1).subscribe(client => {
      this.currentClient = client;
      this.isLoading = false;
    })
  }

}
