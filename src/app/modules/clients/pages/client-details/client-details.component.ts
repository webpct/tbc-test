import { Component } from '@angular/core';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';
import { Account, AccountStatus } from '../../../../models/account.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDataService } from '../../../../data/account-data/account-data.service';
import { ClientDetailsService } from '../../services/client-details.service';
import { switchMap, take, tap } from 'rxjs';

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
  public isAccountLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientDataService: ClientDataService,
    private accountDataService: AccountDataService,
    private router: Router,
    public clientDetailsService: ClientDetailsService
  ) {
    const { client, accounts } = this.activatedRoute.snapshot.data["clientDetails"];
    this.client = client;
    this.accounts = accounts;
  }

  public updateClient(client: Client){
    this.isClientLoading = true;
    this.clientDataService.updateClient({
      ...client,
      id: this.client.id
    })
      .pipe(switchMap(() => this.refreshData()))
      .subscribe(() => {
        this.isClientLoading = false;
        this.isClientEditMode = false;
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
    this.isAccountLoading = true;
    this.accountDataService.createAccount({
      accountNumber: +(new Date()),
      clientNumber: this.client.personalNumber,
      accountType: account.accountType  ,
      currency: account.currency,
      accountStatus: AccountStatus.active,
    })
      .pipe(switchMap(() => this.refreshData()))
      .subscribe(() => {
        this.isAccountLoading = false;
      })
  }

  public closeAccount(account: Account) {
    this.isAccountLoading = true;
    this.accountDataService.closeAccount((account as any)._id)
      .pipe(switchMap(() => this.refreshData()))
      .subscribe(() => {
        this.isAccountLoading = false;
      })
  }

  private refreshData() {
    return this.clientDetailsService
      .getClientsDetails(this.client.id)
      .pipe(
        take(1),
        tap(({ client, accounts }) => {
          this.client = client;
          this.accounts = accounts;
        })
      )
  }
}
