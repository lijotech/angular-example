import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  colspan:number
  constructor() { }

  ngOnInit() {
    this.colspan=3;
  }

}
