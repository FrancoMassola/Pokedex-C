import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SavepokemonsService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //function to add pokemons in database
  savePokemons(pokemon) {
    return this.http.post<any>(`${this.URL}/savePokemons`, pokemon);
  }
}
