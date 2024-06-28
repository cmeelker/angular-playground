import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../domain/Product';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  url = '/api/products';
  readonly products$ = this.http.get<Product[]>(this.url).pipe(shareReplay(1));

  constructor(private http: HttpClient) {}
}
