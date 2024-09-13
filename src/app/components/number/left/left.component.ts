import { Component } from '@angular/core';
import { NumberService } from '../../../services/number/number.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'bakery-left',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css',
})
export class LeftComponent {
  numbers$: Observable<number[]>;

  constructor(private numberService: NumberService) {
    this.numbers$ = this.numberService.getNumbers();
  }
}
