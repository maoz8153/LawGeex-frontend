import { Component, OnInit } from '@angular/core';
import { ImdbSearchService } from '../imdb-search.service';
import { ActivatedRoute } from '@angular/router';
import { IMovieInfo } from 'src/app/core/models/movie.info.model';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.less']
})

export class MovieInfoComponent implements OnInit {

  public movieInfo: IMovieInfo;
  public moviePropDisplay = ['title', 'genres', 'languages', 'country', 'votes', 'rating',
    'runtime', 'year', 'metascore', 'plot', 'rated', 'director', 'writer', 'actors', 'name'];
  constructor(private imdbSearchService: ImdbSearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.imdbSearchService.getMovieById(id)
      .subscribe((response: any) => {
        this.movieInfo = response;
      },
        (err: any) => console.log(err));
  }


}
