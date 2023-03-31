import { PokedexService } from './../../service/pokedex-service.service';
import { Component, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() pokemonStatsIn!:any;
  @Input() pokemonGeneralIn!:any;
  @Input() loadingIn$!:Subject<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

}
