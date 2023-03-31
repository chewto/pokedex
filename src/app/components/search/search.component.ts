import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() pokemonIdOut = new EventEmitter<string>();

  pokemonSearch = new FormControl('');

  constructor() { }

  onSendPokemonId(event:any) {
    event.preventDefault();
    console.log(this.pokemonSearch.value);
    let pokemon:any = this.pokemonSearch.value;
    if(pokemon == ''){
      let randomId = Math.floor(Math.random() * 905) + 1;
      let idString = randomId.toString();
      this.pokemonIdOut.emit(idString);
    }
    this.pokemonIdOut.emit(pokemon);
  }

}
