import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import { Pokemon } from './pokemon.model';

@Component({
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public backup: Pokemon[];
  public pokemons: Pokemon[];

  constructor(private service: PokemonListService) {}

  ngOnInit(): void {
    this.service
      .getAll()
      .toPromise()
      .then((pokemons) => {
        this.backup = pokemons
          .sort((a, b) => (a.national_number > b.national_number ? 1 : -1))
          .map((m) => {
            m.favorite = false;
            return m;
          });
        this.pokemons = this.backup;
      });
  }

  onFilterChange(filters) {
    if (filters.length > 0)
      this.pokemons = this.backup.filter((f) =>
        f.type.some((s) => filters.includes(s))
      );
    else this.pokemons = this.backup;
  }

  onSort(sort) {
    if (sort == 1)
      this.pokemons = this.pokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
    else if (sort == 2)
      this.pokemons = this.pokemons.sort((a, b) =>
        a.national_number > b.national_number ? 1 : -1
      );
    else if (sort == 3)
      this.pokemons = this.pokemons.sort((a, b) => (a.name < b.name ? 1 : -1));
    else if (sort == 4)
      this.pokemons = this.pokemons.sort((a, b) =>
        a.national_number < b.national_number ? 1 : -1
      );
  }

  onSearch(value) {
    if (value.length > 0)
      this.pokemons = this.backup.filter(
        (f) =>
          f.name.toLocaleLowerCase().includes(value.toLowerCase()) ||
          f.national_number.includes(value)
      );
    else this.pokemons = this.backup;
  }

  onFavorite(pokemon) {
    pokemon.favorite = !pokemon.favorite;
  }

  onFilterFavorite(value) {
    if (value) this.pokemons = this.backup.filter((f) => f.favorite);
    else this.pokemons = this.backup;
  }
}
