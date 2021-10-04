import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.change.emit('A');
  }
}
