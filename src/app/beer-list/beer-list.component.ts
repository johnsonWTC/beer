import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { beers } from '../beer/beer.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {


  @Input() inputBeer : beers [] = []
  @Output() outBeer =new  EventEmitter<beers>();
  constructor() { }

  ngOnInit(): void {
  }

  PassData(beer : beers){
    this.outBeer.emit(beer)
  }

  hidetable : boolean = false;


hideShowTable(){
  this.hidetable = !this.hidetable
}

}
