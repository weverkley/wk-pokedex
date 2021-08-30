import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faSearch,
  faSignOutAlt,
  faHeart as fasHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSignOutAlt, faSearch, fasHeart, farHeart, faCheck);
  }
}
