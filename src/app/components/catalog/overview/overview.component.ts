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

  constructor(private catalogService: CatalogService) {
    this.catalogService.getAllItems().subscribe((items) => {
      this.catalogItems = items;
    });
  }
}
