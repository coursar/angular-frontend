import { Component, OnInit } from '@angular/core';
import { PurchaseDto } from './dto/purchase-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent implements OnInit {
  item?: PurchaseDto;

  ngOnInit(): void {
    // инициализация первоначальной загрузки данных
    //this.item = new PurchaseDto(1, 'Water', 100.99);
  }

  // 1. constructor
}
