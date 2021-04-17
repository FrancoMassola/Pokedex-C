import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class GetpokemonsService {
  pokemonslist: Pokemon;

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<any>(`${this.URL}/getPokemons`);
  }
}
