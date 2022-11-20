import { Component, OnInit } from '@angular/core';

export interface beers{
  name : string,
  size : number
}

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor() { }

beersList : beers[] = [];



  ngOnInit(): void {
    this.beersList = [
      {
        name : "Beer one",
        size : 6
      },
      {
        name : "Beer two",
        size : 5
      },
      {
        name : "Beer three",
        size : 4
      }
    ]
  }

  SelectedBeer(beer :beers){
    alert(`${beer.name} selected`)
  }

}
