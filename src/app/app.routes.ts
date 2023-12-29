import { Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

export const routes: Routes = [
    { 'path': '', component: CardsComponent },
    { 'path': 'shopping-card', component: ShoppingCardComponent },
    { 'path': '**', component: PageNotFoundComponent }


];
