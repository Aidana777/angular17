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
export class CardsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  pagedProducts: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  sortDirection: 'asc' | 'desc' = 'asc';
  loading: boolean = false;
  currentSortOrder: 'asc' | 'desc' = 'asc';

  constructor(private httpClient: HttpClient, private cartService: CardService, private searchService: SearchService) { }

  ngOnInit() {
    this.loading = true;
    this.httpClient.get<any[]>('../../assets/db.json')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = this.products;

        if (this.currentSortOrder === 'asc') {
          this.sortAscending();
        } else if (this.currentSortOrder === 'desc') {
          this.sortDescending();
        }

        this.setPage(1);
        this.loading = false;
      });

    this.searchService.searchQuery$.subscribe(query => {
      this.filteredProducts = this.filterProducts(query);
      this.setPage(1);
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

  sortAscending() {
    this.filteredProducts.sort((a, b) => a.price - b.price);
    this.currentSortOrder = 'asc';
    this.setPage(1);
  }

  sortDescending() {
    this.filteredProducts.sort((a, b) => b.price - a.price);
    this.currentSortOrder = 'desc';
    this.setPage(1);
  }

  onSortOrderChange(event: Event) {
    const sortOrder = (event.target as HTMLSelectElement).value;
    if (sortOrder === 'asc') {
      this.sortAscending();
    } else if (sortOrder === 'desc') {
      this.sortDescending();
    }
  }

}