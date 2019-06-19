import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieCardComponent } from './movie-search/movie-card/movie-card.component';

const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: ':id', component: MovieCardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
