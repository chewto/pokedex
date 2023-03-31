import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() pokemonInfoIn!:any;
  @Input() pokemonTypesIn!:any;

  @ViewChild("type") type!: ElementRef;


  constructor(private renderer:Renderer2,
    ) { }

  ngOnInit(): void {
    
  }

}
