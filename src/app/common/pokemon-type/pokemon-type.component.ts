import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss'],
})
export class PokemonTypeComponent implements OnInit {
  @Input() name:
    | 'Grass'
    | 'Poison'
    | 'Fire'
    | 'Dragon'
    | 'Flying'
    | 'Water'
    | 'Bug'
    | 'Normal'
    | 'Dark'
    | 'Electric'
    | 'Psychic'
    | 'Ice'
    | 'Steel'
    | 'Ground'
    | 'Fairy'
    | 'Fighting'
    | 'Rock'
    | 'Ghost';

  constructor() {}

  ngOnInit(): void {}
}
