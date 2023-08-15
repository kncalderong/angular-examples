import { Component } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  template: `
    <h2 style="margin-top: 5rem;">Should mankind colonize the Universe?</h2>
    <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>

    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)"
    >
    </app-voter>
  `,
  styleUrls: ['./votetaker.component.css'],
})
export class VotetakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    console.log('agreed: ', agreed);
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
