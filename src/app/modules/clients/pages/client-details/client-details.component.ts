import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';
import { Account } from '../../../../models/account.model';
import { AccountDataService } from '../../../../data/account-data/account-data.service';

@Component({
  selector: 'tbc-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  public isLoading = true;
  public currentClient: Client;
  public currentAccount: Account;

  constructor(public clientDataService: ClientDataService,
              public accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.clientDataService.findClient(1).subscribe(client => {
      this.currentClient = client;
      this.isLoading = false;
    })
    this.accountDataService.findAccount(1).subscribe((account) => {
      this.currentAccount = account;
    })
  }

}
