import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { ShoppingCartComponent  } from './shopping-card/shopping-card.component';
import { CardService } from './services/card.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LayoutComponent,
    ShoppingCartComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule, // Add FormsModule to imports
    NgxPaginationModule // Include NgxPaginationModule in imports
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
