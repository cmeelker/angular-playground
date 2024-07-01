import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bakery-cart-total',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.css',
})
export class CartTotalComponent {
  constructor(private cartService: CartService) {}
  cartTotal = this.cartService.cartTotal;
  taxTotal = this.cartService.taxTotal;
}
