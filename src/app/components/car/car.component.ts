import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  model;
  name:string;
  speed:number;
  colors:Colors;
  options:string[];
  anytype:any;
  isEdit:boolean;

  constructor() { }

  ngOnInit(): void
  {
  }

  carSelect(carName)
  {
    if(carName == 'bmw')
    {
      this.model = 'bmw';
      this.name = 'm3';
      this.speed = 300;
      this.colors = {
        car: 'black',
        salon: 'Black',
        wheels: 'black'
      };
      this.options = ["sport package", "Manual", "MegaSport"];
    }
   else if(carName == 'audi')
    {
      this.model = 'audi';
      this.name = 'RS8';
      this.speed = 330;
      this.colors = {
        car: 'white',
        salon: 'white',
        wheels: 'Silver'
      };
      this.options = ["midl packeg sport/confort", "Dsg", "LongSport"];
    }
   else if(carName == 'merc')
    {
      this.model = 'mercedes';
      this.name = 's330';
      this.speed = 340;
      this.colors = {
        car: 'black',
        salon: 'white',
        wheels: 'Silver'
      };
      this.options = ["Confort", "Automata", "ConfortSport"];
    }
  }

  addOpt(option)
  {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option)
  {
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] == option)
      {
        this.options.splice(i,1);
        break;
      }
    }
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }
}


interface Colors
{
    car:string,
    salon:string,
    wheels:string
}
