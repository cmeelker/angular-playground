import { Component, Input } from '@angular/core';
import { CartItem } from '../../../domain/CartItem';
import { CurrencyPipe } from '@angular/common';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'bakery-cart-item',
  standalone: true,
  imports: [CurrencyPipe, FontAwesomeModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  faXmark = faXmark;
}
