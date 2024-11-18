import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-food-filters',
  templateUrl: './food-filters.component.html',
  standalone:true,
  imports:[FormsModule,CommonModule],
  styleUrls: ['./food-filters.component.css']
})
export class FoodFiltersComponent {
  showFilters = false; // Toggles the visibility of the filter panel
  appliedFiltersCount = 0; // Keeps track of the applied filters count

  // Define the filters object with an index signature
  filters: { [key: string]: any[] } = {
    category: [],
    price: [],
    rating: []
  };

  restaurants = [
    { name: 'Veg Restaurant', category: 'veg', price: 250, rating: 4.5 },
    { name: 'Non-Veg Restaurant', category: 'non-veg', price: 350, rating: 4.8 }
  ];

  // Toggle the visibility of the detailed filter panel
  toggleFilterPanel() {
    this.showFilters = !this.showFilters;
  }

  // Filter by category (Veg or Non-Veg)
  filterByCategory(category: string) {
    this.toggleFilter('category', category);
  }

  // Filter by price range (e.g., Under ₹300)
  filterByPriceRange(range: string) {
    this.toggleFilter('price', range);
  }

  // Filter by star rating (e.g., 4+)
  filterByStarRating(rating: number) {
    this.toggleFilter('rating', rating);
  }

  // Toggle the filter value and update the badge count
  toggleFilter(type: string, value: any) {
    // Use bracket notation to access dynamic properties
    if (this.filters[type]) {
      const index = this.filters[type].indexOf(value);
      if (index > -1) {
        this.filters[type].splice(index, 1); // Remove if exists
      } else {
        this.filters[type].push(value); // Add if not present
      }
    }
    this.updateFiltersCount();
  }

  // Update the number of active filters based on the selections
  updateFiltersCount() {
    // Use bracket notation to access dynamic properties
    this.appliedFiltersCount =
      this.filters['category'].length +
      this.filters['price'].length +
      this.filters['rating'].length;
  }
}
