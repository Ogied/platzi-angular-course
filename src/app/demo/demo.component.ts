import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ['jett', 'phoenix', 'reyna', 'sage'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    this.items.push('new item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
