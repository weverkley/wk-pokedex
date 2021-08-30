import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import { IconsModule } from '../icons.module';
import { PokemonTypeModule } from '../pokemon-type/pokemon-type.module';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, IconsModule, PokemonTypeModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
