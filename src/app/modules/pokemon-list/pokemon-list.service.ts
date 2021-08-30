import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonListService {
  private url: string = 'https://unpkg.com/pokemons@1.1.0/pokemons.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pokemon[]> {
    return this.http.get(this.url).pipe(
      map((res: any) => res.results),
      catchError(this._handleError)
    );
  }

  private _handleError(error: HttpErrorResponse) {
    let message =
      `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    if (error.error instanceof ErrorEvent) message = error.error.message;

    console.log(message);
    return throwError(message);
  }
}
