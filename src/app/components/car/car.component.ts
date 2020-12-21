import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  model;
  name:string = 'Audi';
  speed:number;
  colors:Colors;
  options:string[];
  anytype:any;

  constructor() { }

  ngOnInit(): void 
  {
    this.model = 'bmw';
    this.name = 'RS8';
    this.speed = 300;
    this.colors = {
      car: 'white',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ["ABS", "AutoPark", "Sport"];
  }
}

interface Colors
{
    car:string,
    salon:string,
    wheels:string
}
