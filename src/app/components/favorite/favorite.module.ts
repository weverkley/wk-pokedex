import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FavoriteComponent],
})
export class FavoriteModule {}
