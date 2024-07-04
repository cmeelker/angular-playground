import { Component } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';

@Component({
  selector: 'bakery-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = this.productService.product;
  productError = this.productService.productError;

  constructor(private productService: ProductService) {
    productService.selectedProductId.set('1');
  }
}
