import { Injectable, computed, signal } from '@angular/core';
import { catchError, filter, map, of, shareReplay, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../domain/Product';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Result } from '../../domain/Result';
import { HttpErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = '/api/products';

  constructor(
    private http: HttpClient,
    private errorService: HttpErrorService
  ) {}

  selectedProductId = signal<string | undefined>(undefined);

  private productsResult$ = this.http.get<Product[]>(this.url).pipe(
    map((data) => ({ data } as Result<Product[]>)),
    shareReplay(1),
    catchError((error) =>
      of({ data: [], error: this.errorService.formatError(error) } as Result<
        Product[]
      >)
    )
  );
  private productsResult = toSignal(this.productsResult$, {
    initialValue: { data: [] },
  });

  private productResult$ = toObservable(this.selectedProductId).pipe(
    filter(Boolean),
    switchMap((productId) => {
      if (!productId) {
        return of({ data: undefined, error: undefined } as Result<Product>);
      }
      const productUrl = `${this.url}/${productId}`;
      return this.http.get<Product>(productUrl).pipe(
        map((data) => ({ data } as Result<Product>)),
        catchError((error) =>
          of({ error: this.errorService.formatError(error) } as Result<Product>)
        )
      );
    }),
    shareReplay(1)
  );

  private productResult = toSignal(this.productResult$, {
    initialValue: { data: undefined, error: undefined },
  });

  products = computed(() => this.productsResult().data);
  productsError = computed(() => this.productsResult().error);

  product = computed(() => this.productResult().data);
  productError = computed(() => this.productResult().error);
}
