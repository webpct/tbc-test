import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../../models/client.model';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  public clients: Client[] = [];
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute)
    this.activatedRoute.data.subscribe(data => {
      this.clients = data['clients'].entities;
    })
  }

  ngOnInit(): void {
  }

}
