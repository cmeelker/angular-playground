import { Component, Input } from '@angular/core';
import { CatalogItem } from '../../../domain/CatalogItem';

@Component({
  selector: 'bakery-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() item!: CatalogItem;
}
