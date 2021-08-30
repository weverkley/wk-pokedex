import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from 'src/app/common/icons.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { PokemonListComponent } from './pokemon-list.component';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { SortModule } from 'src/app/components/sort/sort.module';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { FavoriteModule } from 'src/app/components/favorite/favorite.module';
import { PokemonListService } from './pokemon-list.service';
import { PokemonCardModule } from 'src/app/common/pokemon-card/pokemon-card.module';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    IconsModule,
    NavbarModule,
    SearchbarModule,
    SortModule,
    FilterModule,
    FavoriteModule,
    PokemonCardModule
  ],
  exports: [PokemonListComponent],
  providers: [PokemonListService],
})
export class PokemonListModule {}
