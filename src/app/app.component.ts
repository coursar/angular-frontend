import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }
}
