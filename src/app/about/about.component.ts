import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: any;
  address = {
    first: '',
    last: ''
  };
  @ViewChild('input1') input1: any;
  @ViewChild('form1') form1: any;
  @ViewChild('addressCtrl') addressCtrl: any;

  
  constructor() { }

  ngOnInit() {
  }
  currentData(input1) {
    console.log(this.addressCtrl)
    console.log(this.form1)
  }
}
