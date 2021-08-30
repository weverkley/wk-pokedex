import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { IconsModule } from 'src/app/common/icons.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, IconsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
