import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sv-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Output() onChange = new EventEmitter<boolean>();

  public favorite: FormControl = new FormControl(false);

  constructor() {}

  ngOnInit(): void {
    this.favorite.valueChanges.subscribe((value) => this.onChange.emit(value));
  }
}
