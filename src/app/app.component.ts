import { Component, OnInit } from '@angular/core';
import { PurchaseDto } from './dto/purchase-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent implements OnInit {
  items: PurchaseDto[] = [];

  ngOnInit(): void {
    // инициализация первоначальной загрузки данных
    for (let i = 0; i < 5; i++) {
      this.items.push(new PurchaseDto(
        i,
        'Water',
        100.99 + i,
      ));
    }
  }
}
