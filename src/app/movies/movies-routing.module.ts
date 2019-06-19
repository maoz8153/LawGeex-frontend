import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: ':id', component: MovieInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
