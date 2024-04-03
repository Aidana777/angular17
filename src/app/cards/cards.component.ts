import { CommonModule  } from '@angular/common';
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
export class CardsComponent  {
  products: any[] = [];
  filteredProducts: any[] = [];
  pagedProducts: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8; // Укажите количество элементов на странице по своему усмотрению

  constructor(private httpClient: HttpClient, private cartService: CardService, private searchService: SearchService) { }

  ngOnInit() {
    this.httpClient.get<any[]>('../../assets/db.json')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = this.products;
        this.setPage(1); // Инициализация пагинации
      });

    this.searchService.searchQuery$.subscribe(query => {
      this.filteredProducts = this.filterProducts(query);
      this.setPage(1); // Сброс пагинации при изменении поискового запроса
    });
  }

  filterProducts(query: string): any[] {
    return this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredProducts.length);
    this.pagedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  pageChanged(page: number) {
    this.setPage(page);
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }
}