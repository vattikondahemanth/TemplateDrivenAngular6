import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = 'MaNoj GUUPPP aaaaaa';
  name2 = '';
  salary = 12450000.1458652;
  constructor(private route: ActivatedRoute, private router: Router,
  ) { }
  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    const id = this.route.params.subscribe((param) => {
      console.log(param);
    });

    console.log(id);
    console.log(this.route.params);
    console.log(this.route.snapshot.paramMap.get('id'))
  }
  btn() {
   // this.name2 = this.name2 + 1;
  }
  btnc() {
    console.log(this.name);
  }
}
