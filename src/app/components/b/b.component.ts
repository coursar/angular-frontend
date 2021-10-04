import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input() item = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.change.emit('B');
  }
}
