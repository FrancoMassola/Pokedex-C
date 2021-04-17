import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetpokemonsService {
 

  constructor(private http: HttpClient) {}

  getPokemons(){
    
  }
  
}
