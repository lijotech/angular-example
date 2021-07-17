import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  isActive:boolean
  constructor() { }

  ngOnInit() {
    this.isActive=true;
  }

}
