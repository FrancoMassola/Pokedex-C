import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.css'],
})
export class PokecardsComponent implements OnInit {
  constructor() {}
  
  //init pokemon from form
  pokemon = {};

  formVisibility = false;

  ngOnInit(): void {}

  ShowForm() {
    this.formVisibility = true;
  }

  HideForm() {
    this.formVisibility = false;
  }
}
