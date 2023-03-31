import { PokemonRes, Sprites,Stat, Type } from './models/pokemon-req';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from './service/pokedex-service.service';
import { tap, BehaviorSubject, fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokedex-angular';

  public pokemonStats!:Stat[];
  public pokemonVisualizer!:Sprites;
  public pokemonTypes!:Type[];
  public pokemonGeneral!:PokemonRes;
  public pokemonId!:string;
  public loading$ = new BehaviorSubject<boolean>(true);

  public error = {
    pokemon: 'no found'
  }

  constructor(
    private pokedexSVC:PokedexService,
  ){}

  ngOnInit():void{

    let randomPokemon = Math.floor(Math.random() * 905) + 1;

    this.getPokemon(randomPokemon);
  }

  pokemonIdCatch(formData:any) {
    this.pokemonId = formData;
    this.loading$.next(true);
    this.getPokemon(this.pokemonId);
  }

  getPokemon(id:any):void{
    this.pokedexSVC.getPokemon(id).pipe(
      tap(()=> this.loading$.next(false))
    )
      .subscribe({
        next: (res:PokemonRes)=>{
          this.pokemonVisualizer = res.sprites;
          this.pokemonStats = res.stats;
          this.pokemonTypes = res.types;
          this.pokemonGeneral = res;
        },
        error: err => console.log(this.error.pokemon),
        complete: () => console.log('completed')
      })
  }
}
