import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { IconsModule } from 'src/app/common/icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, IconsModule, FormsModule, ReactiveFormsModule],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
