import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  imageUrl:any;
  constructor() { }

  ngOnInit() {
    this.imageUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  }

}
