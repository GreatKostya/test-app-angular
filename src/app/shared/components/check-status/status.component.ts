import { Component, Input } from '@angular/core';

@Component({
  selector: 'check-status',
  templateUrl: './status.html'
})
export class StatusComponent {
  @Input() checked: boolean;
  @Input() textStatus: string;
}
