import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IMovieQuary } from '../core/models/movie.quary.model';
import { MovieSearchResult } from '../core/models/movie.search.result.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbSearchService {

  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  searchMovies(quary: IMovieQuary): Observable<MovieSearchResult[]> {
    return this.http.get<any[]>(`${this.apiUrl}/movies`, {
      params: {
        title: quary.title,
        year: quary.year.toString()
      }
    })
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
