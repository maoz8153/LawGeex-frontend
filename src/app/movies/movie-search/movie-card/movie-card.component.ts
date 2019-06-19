import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchResult } from 'src/app/core/models/movie.search.result.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {

  @Input() movieSearchResult: MovieSearchResult;
  constructor() { }

  ngOnInit() {
  }

}
