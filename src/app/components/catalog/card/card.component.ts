import { Component, Input } from '@angular/core';
import { CatalogItem } from '../../../domain/CatalogItem';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bakery-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() item!: CatalogItem;
}
