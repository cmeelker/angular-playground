import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NumberService } from '../../../services/number/number.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bakery-right',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css',
})
export class RightComponent {
  numbers$: Observable<number[]>;

  constructor(private numberService: NumberService) {
    this.numbers$ = this.numberService.getNumbers();
  }
}
