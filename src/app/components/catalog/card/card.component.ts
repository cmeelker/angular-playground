import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Product } from '../../../domain/Product';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'bakery-card',
  standalone: true,
  imports: [CurrencyPipe, FontAwesomeModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private cartService: CartService) {}

  @Input() product!: Product;
  faCirclePlus = faCirclePlus;
  cartItems = this.cartService.cartItems();

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
