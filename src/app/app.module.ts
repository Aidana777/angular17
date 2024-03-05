// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardService } from './services/card.service';


@NgModule({
    declarations: [
        AppComponent,
        CardsComponent,
        LayoutComponent,
        ShoppingCardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        MatBadgeModule,
        MatSnackBarModule,
    ],
    providers: [CardService],
    bootstrap: [AppComponent],
})
export class AppModule { }