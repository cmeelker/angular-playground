import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Product } from '../../../domain/Product';

@Component({
  selector: 'bakery-card',
  standalone: true,
  imports: [CurrencyPipe, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() product!: Product;
  faCirclePlus = faCirclePlus;
}
