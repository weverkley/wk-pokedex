import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sv-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() onChange = new EventEmitter<Array<string>>();

  public filters: any = [
    { name: 'Grass', selected: false },
    { name: 'Poison', selected: false },
    { name: 'Fire', selected: false },
    { name: 'Dragon', selected: false },
    { name: 'Flying', selected: false },
    { name: 'Water', selected: false },
    { name: 'Bug', selected: false },
    { name: 'Normal', selected: false },
    { name: 'Dark', selected: false },
    { name: 'Electric', selected: false },
    { name: 'Psychic', selected: false },
    { name: 'Ice', selected: false },
    { name: 'Steel', selected: false },
    { name: 'Ground', selected: false },
    { name: 'Fairy', selected: false },
    { name: 'Fighting', selected: false },
    { name: 'Rock', selected: false },
    { name: 'Ghost', selected: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  onButtonClick(filter) {
    filter.selected = !filter.selected;
    this.onChange.emit(
      this.filters.filter((f) => f.selected).map((m) => m.name)
    );
  }
}
