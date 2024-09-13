import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, share, switchMap, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private numbers$: Observable<number[]> | undefined;

  constructor(private http: HttpClient) {}

  // TODO: Parameters. If there have changed, update observable
  public getNumbers() {
    if (!this.numbers$) {
      this.numbers$ = timer(0, 200000).pipe(
        switchMap(() =>
          this.http.get('/numbers/api/v1.0/random?min=1&max=100&count=1')
        ),
        tap(() => {
          console.log('🍕');
        }),
        map((data) => data as number[]),
        share()
      );
    }

    return this.numbers$;
  }
}
