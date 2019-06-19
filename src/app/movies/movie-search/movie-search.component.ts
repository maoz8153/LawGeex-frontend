import { Component, OnInit } from '@angular/core';
import { IMovieQuary } from 'src/app/core/models/movie.quary.model';
import { ImdbSearchService } from '../imdb-search.service';
import { MovieSearchResult } from 'src/app/core/models/movie.search.result.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.less']
})
export class MovieSearchComponent implements OnInit {

  moviesResult: MovieSearchResult[] = [];
  constructor(private imdbSearchService: ImdbSearchService) { }

  ngOnInit() {
  }

  onSearchMoviesAction(quary: IMovieQuary) {
    this.imdbSearchService.searchMovies(quary)
      .subscribe((response: MovieSearchResult[]) => {
        this.moviesResult = response;
      },
        (err: any) => console.log(err));
  }

}
