import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CatalogService } from '../../../services/catalog/catalog.service';
import { CatalogItem } from '../../../domain/CatalogItem';

@Component({
  selector: 'bakery-overview',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  catalogItems: CatalogItem[] = [];
  error?: string;

  constructor(private catalogService: CatalogService) {
    this.catalogService.getAllCatalogItems().subscribe({
      next: (catalogItems) => {
        this.catalogItems = catalogItems;
      },
      error: (error) => (this.error = error),
    });
  }
}
