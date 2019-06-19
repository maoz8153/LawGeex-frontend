import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SearchBoxComponent } from './movie-search/search-box/search-box.component';
import { MovieCardComponent } from './movie-search/movie-card/movie-card.component';

@NgModule({
  declarations: [MovieSearchComponent, SearchBoxComponent, MovieCardComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
