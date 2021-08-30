import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sv-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Output() onChange = new EventEmitter<string>();

  public filter: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.filter.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.onChange.emit(value));
  }
}
