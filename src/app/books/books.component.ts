import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  onSave(event) {
    console.log('Button Clicked',event);
    event.stopPropagation();
  }

}
