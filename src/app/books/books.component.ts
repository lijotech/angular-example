import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  email="me@example.com"
  constructor() { }
  ngOnInit() {

  }
  onKeyUp()
  {
    console.log('Email changed:',this.email);
  }

}
