import { Subject } from 'rxjs';
import { VoiceSearchService } from './../../service/voice-search.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() pokemonIdOut = new EventEmitter<string>();

  public search!:any;
  public microState!: Subject<boolean>;
  public pokemonSearch = new FormGroup({
    pokemon: new FormControl('')
  });

  constructor(
    private voiceSVC:VoiceSearchService
  ) {
    this.voiceSVC.start();
  }

  public onSendPokemonId():void {
    this.search = this.pokemonSearch.get('pokemon')?.value;
    this.search = this.search.toLowerCase();
    console.log(this.search)

    if(this.search.length <= 0){
      let randomId = Math.floor(Math.random() * 905) + 1;
      let idString = randomId.toString();
      this.pokemonIdOut.emit(idString);
    }

    if(this.search.length >= 1){
      this.pokemonIdOut.emit(this.search);
    }

  }


  public onVoiceSearch():void {
    this.voiceSVC.hear();
    this.voiceSVC.text$
    .subscribe(res=>{
      this.pokemonSearch.patchValue({pokemon: res});
    })
  }

}
