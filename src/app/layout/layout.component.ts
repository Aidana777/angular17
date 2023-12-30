import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../service/layout.service'
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private searchService: SearchService) {}
  updateSearch(query: string) {
    this.searchService.setSearchQuery(query);
  }

}
