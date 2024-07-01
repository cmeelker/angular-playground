import { Component, computed } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'bakery-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private cartService: CartService) {}

  faCartShopping = faCartShopping;
  cartCount = this.cartService.cartCount;
}
