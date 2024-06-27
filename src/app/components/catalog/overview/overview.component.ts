import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CatalogService } from '../../../services/catalog/catalog.service';

import { catchError } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bakery-overview',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  error?: string;
  readonly products$ = this.catalogService.products$.pipe(
    catchError((error) => {
      this.error = error;
      return [];
    })
  );

  constructor(private catalogService: CatalogService) {}
}
