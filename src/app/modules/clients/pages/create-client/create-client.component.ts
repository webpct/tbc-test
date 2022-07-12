import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Client } from '../../../../models/client.model';
import { ClientDataService } from '../../../../data/client-data/client-data.service';

@Component({
  selector: 'tbc-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent {

  public isLoading = false;

  constructor(public clientDataService: ClientDataService,
              public router: Router) {
  }

  public onSubmit(client: Client): void {
    this.isLoading = true;
    this.clientDataService.createClient(client)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigateByUrl('/clients');
      })
  }
}
