import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  condition = true;
  xyz = 'sdjasdkjasjdjasgjd';
  arry = ['manoj', 'kapil', 'shram']
  constructor() { }

  ngOnInit() {

  }
  myMethod(item) {
    console.log(item);
  }

}
