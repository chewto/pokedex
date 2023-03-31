import { PokemonItem } from './../models/pokemon-info';
import { PokemonRes } from './../models/pokemon-req';
//import { ReqResResponse  } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemonArr!:PokemonItem[]

  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http:HttpClient) { }

  getPokemon(pokemonID:any):Observable<PokemonRes>{
    return this.http.get<PokemonRes>(`${this.url}/${pokemonID}`)
  }

  /*
  getPokemonSearch(pokemonID){
    return this.http.get<PokemonItem[]>(`${this.urlSearch}/${}`).pipe(
    )
  }*/

 
}
