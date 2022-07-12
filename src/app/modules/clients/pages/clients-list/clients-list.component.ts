import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { ClientsTableService, ClientsTableView } from '../../services/clients-table.service';

@Component({
  selector: 'tbc-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  public clients: ClientsTableView[] = [];
  public loading: boolean = false;
  public totalRecords = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientsTableService: ClientsTableService
  ) {
    const data = this.activatedRoute.snapshot.data["clients"];
    this.clients = data.entities;
    this.totalRecords = data.pagination.pages * data.pagination.pageSize;
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.clientsTableService.getClientsList({
      bot: event.first || 0,
      top: (event.first || 0)+(event.rows || 0),
    }).subscribe(data => {
      this.clients = data.entities;
    })
  }
}
