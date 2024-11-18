import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  restaurants = [
    {
      name: 'Pizza Palace',
      description: 'Famous for its classic cheese pizza.',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: ['Cheese Pizza '],
      links: {
       
      
      }
    },
    {
      name: 'Burger Bistro',
      description: 'Best burgers in town!',
      image: 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg',
      items: ['Maharaja Burger'],
      links: {
       
       
      }
    },
    {
      name: 'Kwality Walls',
      description: 'Best burgers in town!',
      image: 'https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: ['Kwality Walls Ice-Cream'],
      links: {
       
        
      }
    },
    {
      name: 'Burger Bistro',
      description: 'Best burgers in town!',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mrjill9ml5uhmo9ytfu8',
      items: ['Chat Paapdi'],
      links: {
        
       
      }
    },
    {
      name: 'Burger Bistro',
      description: 'Best burgers in town!',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/87d7877e4ca8634bcf01b01ca4445061',
      items: ['Sandwich'],
      links: {
        
        
      }
    },

  

    
  ]; 
}



