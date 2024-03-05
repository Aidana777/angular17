import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../services/card.service';
import { SearchService } from '../services/search.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor(private httpClient: HttpClient, private cartService: CardService, private searchService: SearchService) { }

  products: any[] = [];
  filteredProducts: any[] = [];

  ngOnInit() {
    this.httpClient.get<any[]>('assets/db.json').subscribe(data => {
      this.products = data;
      this.filteredProducts = this.products;
    });
  }

  filterProductsByType(type: string): any[] {
    return this.products.filter(product => product.type === type);
  }

  sortByType(type: string) {
    this.filteredProducts = this.filterProductsByType(type);
  }

  addToCart(product: any) {
    this.cartService.addToCard(product);
  }
}