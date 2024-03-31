import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardService } from '../services/card.service';
import { SearchService } from '../services/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private httpClient: HttpClient, private cartService: CardService, private searchService: SearchService) { }

  ngOnInit() {
    this.httpClient.get<any[]>('assets/db.json')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = this.products;
      });

    this.searchService.searchQuery$.subscribe(query => {
      this.filteredProducts = this.filterProducts(query);
    });
  }

  filterProducts(query: string): any[] {
    return this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
  }

  addToCard(product: any) {
    this.cartService.addToCard(product);
  }
}