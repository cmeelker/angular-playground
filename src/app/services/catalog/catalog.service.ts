import { Injectable, computed } from '@angular/core';
import { catchError, map, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../domain/Product';
import { toSignal } from '@angular/core/rxjs-interop';
import { Result } from '../../domain/Result';
import { HttpErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  url = '/api/products';

  constructor(
    private http: HttpClient,
    private errorService: HttpErrorService
  ) {}

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

  products = computed(() => this.productsResult().data);
  productsError = computed(() => this.productsResult().error);
}
