import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeComponent } from './pokemon-type.component';

@NgModule({
  declarations: [PokemonTypeComponent],
  imports: [CommonModule],
  exports: [PokemonTypeComponent],
})
export class PokemonTypeModule {}
