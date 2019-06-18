import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [MovieSearchComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
