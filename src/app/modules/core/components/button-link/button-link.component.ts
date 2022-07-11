import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbc-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent {

  @Input()
  public text: string = '';

  @Input()
  public href: string = '';

}
