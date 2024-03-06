import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() { }

  filterProductsByQuery(products: any[], query: string): any[] {

    return products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
