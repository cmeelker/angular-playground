import { Injectable } from '@angular/core';
import { CatalogItem } from '../../domain/CatalogItem';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  url = '/api/items';

  constructor(private http: HttpClient) {}

  // TODO: Error handling etc.
  getAllItems(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItem[]>(this.url);
  }
}
