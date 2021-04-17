import { Component, OnInit } from '@angular/core';
import { SavepokemonsService } from '../../services/savepokemons.service';
import { GetpokemonsService } from '../../services/getpokemons.service';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.css'],
})
export class PokecardsComponent implements OnInit {
  constructor(
    private savepokemonsService: SavepokemonsService,
    private getpokemonsService: GetpokemonsService
  ) {}

  //initialize pokemon
  pokemon = {
    pokemonName: '',
    type: '',
    level: '',
    abilities: '',
  };

  trainerPokemons = [];

  formVisibility = false;

  ngOnInit(): void {
    this.getpokemonsService.getPokemons().subscribe(
      (res) => {
        this.trainerPokemons = res;
      },
      (err) => console.log(err)
    );
  }

  ShowForm() {
    this.formVisibility = true;
  }

  HideForm() {
    this.formVisibility = false;
  }

  savePokemons() {
    this.savepokemonsService.savePokemons(this.pokemon).subscribe(
      (res) => {
        this.getpokemonsService.getPokemons();
        alert("Seccessfully Save")
       
      },
      (err) => console.log(err)
    );
  }
}
