import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubjectService} from "../../services/subject/subject.service";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input() item = '';
  current?: string;

  constructor(private service: SubjectService) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe(evt => {
      this.current = evt;
      console.log(evt)
    });
  }

  onClick() {
    this.change.emit('A');
  }
}
