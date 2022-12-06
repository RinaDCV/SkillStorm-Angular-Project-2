import { Component } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {

  sign: string ='';
  symbol: string ='';
  element: string ='';

deck: any = [
  {
    sign:'Taurus',
    symbol: 'Bull',
    element:'Earth'
  },
  {
    sign:'Leo',
    symbol: 'Lion',
    element:'Fire'
  },
  {
    sign:'Aquarius',
    symbol: 'Water Bearer',
    element:'Air'
  },
  {
    sign:'Libra',
    symbol: 'Scales',
    element:'Air'
  },
  {
    sign:'Cancer',
    symbol: 'Crab',
    element:'Water'
  },
  {
    sign:'Virgo',
    symbol: 'Virgin',
    element:'Earth'
  }
];
// fuction/method to add a sign to the list of cards
 addSign(): void {
  this.deck.push(
    //create object with {}
    {
      sign: this.sign,
      symbol: this.symbol,
      element: this.element

    }
  )
 }

  addSignUsingModel(): void{
    //inside fucntion/method you need a let or const
   let newSign: Card = new Card(this.sign,this.symbol, this.element);
   this.deck.push(newSign);
  }



}
