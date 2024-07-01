import { Component, Input } from '@angular/core';
import { CartItem } from '../../../domain/CartItem';
import { CurrencyPipe } from '@angular/common';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'bakery-cart-item',
  standalone: true,
  imports: [CurrencyPipe, FontAwesomeModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  faXmark = faXmark;
  quantityArray = [...Array(8).keys()].map((x) => x + 1);

  constructor(private cartService: CartService) {}

  onQuantityChange(quantity: number) {
    this.cartService.updateQuantity(this.cartItem, Number(quantity));
  }

  onDelete() {
    this.cartService.deleteProduct(this.cartItem);
  }
}
