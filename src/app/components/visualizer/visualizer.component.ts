import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  @Input() pokemonVisualizerIn!:any;
  @Input() pokemonTypesIn!:any;
  @Input() pokemonGeneralIn!:any;
  @Input() loadingIn$!:Subject<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

}
