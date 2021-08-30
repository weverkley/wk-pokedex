import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { IconsModule } from 'src/app/common/icons.module';

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, IconsModule],
  exports: [FilterComponent],
})
export class FilterModule {}
