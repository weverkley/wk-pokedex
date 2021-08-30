import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sv-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Output() onFavorite = new EventEmitter<boolean>();

  @Input() number: string;
  @Input() name: string;
  @Input() image: string;
  @Input() favorite: boolean;
  @Input() types: Array<string>;

  constructor() {}

  ngOnInit(): void {}

  onChangeFavorite() {
    this.onFavorite.emit(!this.favorite);
  }
}
