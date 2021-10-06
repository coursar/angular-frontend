import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {SubjectService} from "../../services/subject/subject.service";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input() item = '';

  constructor(private service: SubjectService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.change.emit('B');
    this.service.passData(new Date().toUTCString());
  }
}
