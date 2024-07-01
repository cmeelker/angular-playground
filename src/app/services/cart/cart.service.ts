import { Injectable, computed, signal } from '@angular/core';
import { CartItem } from '../../domain/CartItem';
import { Product } from '../../domain/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([
    {
      product: {
        id: '1',
        title: 'Pecan Pie',
        price: 3.0,
        category: 'Pie',
        image: '1.jpg',
      },
      quantity: 1,
    },
    {
      product: {
        id: '2',
        title: 'Lemon Merengue Pie',
        price: 4.5,
        category: 'Pie',
        image: '2.jpg',
      },
      quantity: 2,
    },
  ]);
  cartCount = computed(() =>
    this.cartItems().reduce(
      (previousValue, item) => previousValue + item.quantity,
      0
    )
  );

  constructor() {}

  addProduct(product: Product) {
    // TODO: Increase quantity if product already exists
    this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
  }
}
