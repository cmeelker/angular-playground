import { Injectable, computed, signal } from '@angular/core';
import { CartItem } from '../../domain/CartItem';
import { Product } from '../../domain/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  cartCount = computed(() =>
    this.cartItems().reduce(
      (previousValue, item) => previousValue + item.quantity,
      0
    )
  );
  cartTotal = computed(() =>
    this.cartItems().reduce(
      (previousValue, item) =>
        previousValue + item.quantity * item.product.price,
      0
    )
  );
  taxTotal = computed(() => this.cartTotal() * 0.21);

  constructor() {}

  addProduct(product: Product) {
    this.cartItems.update((items) => {
      const index = items.findIndex((item) => item.product.id === product.id);
      if (index > -1) {
        items[index].quantity += 1;
        return [...items];
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  deleteProduct(cartItem: CartItem) {
    this.cartItems.update((items) =>
      items.filter((item) => item.product.id !== cartItem.product.id)
    );
  }

  updateQuantity(cartItem: CartItem, quantity: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === cartItem.product.id ? { ...item, quantity } : item
      )
    );
  }
}
