import { Component, forwardRef, OnInit } from '@angular/core';
import { Client, Gender } from '../../../../models/client.model';
import { FormGroup, FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClientDataService } from '../../../../data/client-data/client-data.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

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
