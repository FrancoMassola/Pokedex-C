import { Component, OnInit } from '@angular/core';
import { SavepokemonsService } from '../../services/savepokemons.service';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.css'],
})
export class PokecardsComponent implements OnInit {
  constructor(private savepokemonsService: SavepokemonsService) {}

  //initialize pokemon
  pokemon = {
    pokemonName: '',
    type: '',
    level: '',
    abilities: '',
  };

  formVisibility = false;

  ngOnInit(): void {}

  ShowForm() {
    this.formVisibility = true;
  }

  HideForm() {
    this.formVisibility = false;
  }

  savePokemons() {
    this.savepokemonsService.savePokemons(this.pokemon).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
