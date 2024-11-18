import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { Cards2Component } from '../cards2/cards2.component';
import { RouterModule } from '@angular/router';
import { CircleCardComponent } from '../circle-card/circle-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardsComponent, Cards2Component,CircleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
