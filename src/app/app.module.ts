// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Импорт FormsModule
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
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
    FormsModule, // Добавление FormsModule в imports
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
