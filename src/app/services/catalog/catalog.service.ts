import { Injectable } from '@angular/core';
import { CatalogItem } from '../../domain/CatalogItem';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  url = '/api/items';
  readonly catalogItems$ = this.http.get<CatalogItem[]>(this.url);

  constructor(private http: HttpClient) {}
}
