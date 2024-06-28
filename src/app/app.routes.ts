import { Routes } from '@angular/router';
import { OverviewComponent } from './components/catalog/overview/overview.component';
import { ProductComponent } from './components/catalog/product/product/product.component';
import { CartComponent } from './components/cart/cart/cart.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
];
