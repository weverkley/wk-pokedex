import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sv-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Output() onChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onChangeSelect(ev) {
    this.onChange.emit(ev.target.value);
  }
}
