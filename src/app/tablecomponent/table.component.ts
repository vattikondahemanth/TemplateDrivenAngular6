import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  name = 'MaNoj GUUPPP aaaaaa';
  @Input() items = [];
  @Output() itemClick: EventEmitter<any> = new EventEmitter();
  @Output() itemClick2: Subject<any> = new Subject();

  btnClick(item) {
    this.itemClick.emit(item);
  }

  btnClick2(item) {
    this.itemClick2.next(item);
  }
}
