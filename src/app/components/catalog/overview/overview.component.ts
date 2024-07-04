import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductService } from '../../../services/product/product.service';

import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bakery-overview',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  products = this.productService.products;
  productsError = this.productService.productsError;

  constructor(private productService: ProductService) {}
}
