import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMovieQuary } from 'src/app/core/models/movie.quary.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less']
})
export class SearchBoxComponent implements OnInit {

  movieSearchForm: FormGroup;
  @Output() searchMovies = new EventEmitter<IMovieQuary>();

  constructor() { }

  ngOnInit() {
    this.movieSearchForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      year: new FormControl('', [
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    });
  }

  searchMoviesAction() {
    const userFormValue = this.movieSearchForm.value;
    this.searchMovies.emit(userFormValue);
  }

}
