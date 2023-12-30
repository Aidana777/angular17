import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardService } from '../services/card.service';
import { SearchService } from '../service/layout.service';
interface Product {
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  id: number;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 
  products: any[] = [
    { "title": "Классический Бургер", "imageUrl": "https://recipes.av.ru//media/recipes/100608_picture_XNlaEKL.jpg", "price": 29.99, "rating": 4.5, "id": 1 },
    { "title": "Куриный Бургер", "imageUrl": "https://fast-food.online/wp-content/uploads/2020/03/kurinyi-burger-s-avokado.png", "price": 49.99, "rating": 3.8, "id": 2 },
    { "title": "Калифорния Бургер", "imageUrl": "https://www.burgerartist.com/wp-content/uploads/2016/09/california-burger-close-768x1152.jpg", "price": 19.99, "rating": 4.0, "id": 3 },
    { "title": "Лондон Бургер", "imageUrl": "https://media.timeout.com/images/105422478/1536/864/image.jpg", "price": 39.99, "rating": 4.2, "id": 4 },
    { "title": "Фирменный Бургер", "imageUrl": "https://menu2go.ru/images/food/8/8_20220801124838_2284.jpg", "price": 59.99, "rating": 3.7, "id": 5 },
    { "title": "Бургер с копчёной говядиной", "imageUrl": "https://brandfood.net/wp-content/uploads/2021/08/burger-s-koloj-1.png", "price": 25.99, "rating": 4.8, "id": 6 }
  ];
  filteredProducts: any[] = []
  constructor(private cartService: CardService,private searchService: SearchService) {}
  ngOnInit() {
    this.searchService.searchQuery$.subscribe(query => {
      this.search(query);
    });
  }

  addToCard(product: Product) {
    this.cartService.addToCard(product);
  }

  search(query: string) {
    console.log('Query:', query);

    // Reset the filteredProducts array before applying the new filter
    this.filteredProducts = [];

    // Apply the new filter based on the search query
    if (query.trim() !== '') {
      this.filteredProducts = this.products.filter((product: Product) => {
        console.log('Product Title:', product.title);
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    } else {
      // If the query is empty, show all products
      this.filteredProducts = [...this.products];
    }

    console.log('Filtered Products:', this.filteredProducts);
  }


}