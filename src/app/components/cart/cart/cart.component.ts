import { Component, effect } from '@angular/core';
import { CartItem } from '../../../domain/CartItem';
import { CartService } from '../../../services/cart/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'bakery-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  cartItems = this.cartService.cartItems;
}
