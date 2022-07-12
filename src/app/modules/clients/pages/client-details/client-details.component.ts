import { Component } from '@angular/core';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';
import { Account, AccountStatus } from '../../../../models/account.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDataService } from '../../../../data/account-data/account-data.service';

@Component({
  selector: 'tbc-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {

  public client: Client;
  public accounts: Account[];
  public isClientEditMode = false;
  public isDeleteModalVisible = false;
  public isDeleteLoading = false;
  public isClientLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientDataService: ClientDataService,
    private accountDataService: AccountDataService,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.client = data['clientDetails'].client;
      this.accounts = data['clientDetails'].accounts;
    })
  }

  public updateClient(client: Client){
    this.isClientLoading = true;
    this.clientDataService.updateClient({
      ...client,
      id: this.client.id
    })
      .subscribe(() => {
        this.isClientLoading = false;
        this.isClientEditMode = false;
        this.reloadPage();
      })
  }

  public deleteClient() {
    this.isDeleteLoading = true;
    this.clientDataService.deleteClient(this.client.id)
      .subscribe(() => {
        this.router.navigateByUrl('/clients')
        this.isDeleteLoading = false;
      })
  }

  public createAccount(account: Account) {
    this.accountDataService.createAccount({
      accountNumber: +(new Date()),
      clientNumber: +this.client.personalNumber,
      accountType: account.accountType,
      currency: account.currency,
      accountStatus: AccountStatus.active,
    }).subscribe(() => {
      this.reloadPage();
    })
  }

  public closeAccount(accountId: string) {
    this.accountDataService.closeAccount(accountId).subscribe(() => {
      this.reloadPage();
    })
  }

  private reloadPage() {
    window.location.reload()
  }
}
