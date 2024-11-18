import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FoodFiltersComponent } from './food-filters/food-filters.component';
import { Cards2Component } from './cards2/cards2.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ApplicationModule } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, CardsComponent, FoodFiltersComponent, Cards2Component,RouterModule,LoginComponent,FormsModule,ApplicationModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Use 'styleUrls' instead of 'styleUrl'
})
export class AppComponent {
  title = 'food-delivery-website';
  searchTerm: string = '';  // This will hold the search input

  // Emit the search term to child components
  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  
}
