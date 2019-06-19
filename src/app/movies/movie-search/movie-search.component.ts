import { Component, OnInit } from '@angular/core';
import { IMovieQuary } from 'src/app/core/models/movie.quary.model';
import { ImdbSearchService } from '../imdb-search.service';
import { MovieSearchResult } from 'src/app/core/models/movie.search.result.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.less']
})
export class MovieSearchComponent implements OnInit {

  moviesResult: MovieSearchResult[] = [];
  constructor(private imdbSearchService: ImdbSearchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSearchMoviesAction(quary: IMovieQuary) {
    this.imdbSearchService.searchMovies(quary)
      .subscribe((response: MovieSearchResult[]) => {
        this.moviesResult = response;
      },
        (err: any) => console.log(err));
  }

  onCardClick(movieId: string) {
    this.router.navigate([movieId], { relativeTo: this.route });
  }

}
