import { Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

export const routes: Routes = [
    {'path':'',component: CardsComponent},
    { 'path': 'shopping-card', component: ShoppingCardComponent }

];
