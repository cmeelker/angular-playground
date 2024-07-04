import { Component, Input } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import {
  faHeartCirclePlus,
  faHeart,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Product } from '../../../domain/Product';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { Store } from '@ngrx/store';
import { toggleFavoriteAction } from '../../../state/favorites.actions';
import { selectIsFavorite } from '../../../state/favorites.selectors';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'bakery-card',
  standalone: true,
  imports: [CurrencyPipe, FontAwesomeModule, RouterModule, AsyncPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() product!: Product;
  faHeart = faHeart;
  faHeartCirclePlus = faHeartCirclePlus;
  faCartPlus = faCartPlus;
  cartItems = this.cartService.cartItems();
  isFavorite$!: Observable<boolean>;

  constructor(private cartService: CartService, private store: Store) {}

  ngOnInit() {
    this.isFavorite$ = this.store.select(selectIsFavorite(this.product.id));
  }

  addToCart() {
    this.cartService.addProduct(this.product);
  }

  toggleFavorite() {
    this.store.dispatch(toggleFavoriteAction({ productId: this.product.id }));
  }
}
