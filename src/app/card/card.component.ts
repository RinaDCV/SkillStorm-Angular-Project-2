import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // @ indicates a decorator
// the following name is taking in as a property ...its going to send card property
// and assign a value 
  @Input() card: any;

  //sign: string =  'Yay!'; 

}
