import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './deck/deck.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {//this created a default route to the home component
    path:'',
    component:HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'deck',
    component: DeckComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
