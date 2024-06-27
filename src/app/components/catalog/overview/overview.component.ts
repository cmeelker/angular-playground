import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'bakery-overview',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {}
