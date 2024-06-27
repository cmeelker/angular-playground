import { Component, Input } from '@angular/core';
import { CatalogItem } from '../../../domain/CatalogItem';
import { CurrencyPipe } from '@angular/common';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'bakery-card',
  standalone: true,
  imports: [CurrencyPipe, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() catalogItem!: CatalogItem;
  faCirclePlus = faCirclePlus;
}
