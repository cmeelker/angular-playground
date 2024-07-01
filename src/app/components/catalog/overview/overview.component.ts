import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CatalogService } from '../../../services/catalog/catalog.service';

import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bakery-overview',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  products = this.catalogService.products;
  productsError = this.catalogService.productsError;

  constructor(private catalogService: CatalogService) {}
}
