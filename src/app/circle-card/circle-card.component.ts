import { Component,ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circle-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './circle-card.component.html',
  styleUrl: './circle-card.component.css'
})
export class CircleCardComponent {
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer: ElementRef | undefined;


  cards = [
    {
      
      title: "Pizzas",
      text: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSesw2XM-agQdLD9pouvHtpKKmOEkULJIl2w&s",
      link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
    },
    {
    
      title: "Burgers",
      text: "More quick text here.",
      image: "https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg",
      link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2"
    },
    {
      
      title: "Biryani",
      text: "",
      image: "https://images.pexels.com/photos/28674544/pexels-photo-28674544/free-photo-of-spicy-indian-rice-dish-with-red-chilies.jpeg?auto=compress&cs=tinysrgb&w=600",
      link:"https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"
    },
    {
      
      title: "North Indian",
      text: "Even mo",
      image: "https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2"
    },
    {
      
      title: "Chole Bhature",
      text: "",
      image: "https://media.istockphoto.com/id/1446439743/photo/chole-bhature-or-chick-pea-curry.jpg?s=2048x2048&w=is&k=20&c=KdyYrUWT8aRUKwxVgD4bQLjSlM7Nxt1flL4S0rBjAGM=",
      link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2"
    },
    {
      
      title: "Shakes",
      text:  "",
      image: "https://images.pexels.com/photos/28010210/pexels-photo-28010210/free-photo-of-chocolate-shake-ice-shake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2"
    },
    {
      
      title: "Rolls",
      text: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY625YuGCYrGTfJZC1ESH6dfjstKp6m-siYA&s",
      link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2"
    },
    {
      
      title: "Pasta",
      text: "",
      image: "https://www.allrecipes.com/thmb/gTibTRJ8MW87L0jMhAvXPjIDD94=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg",
      link:"https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2"  
      },
    {
      
      title: "Salad",
      text: "",
      image: "data:image/jpeg;base64,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",
      link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2"
    },
    {
      
      title: "Paratha",
      text: "",
      image: "https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg",
      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2"
    },
  
    {
      
      title: "Noodles",
      text: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj4fbDzlSwNqWoBrAIR5tG2DH7S2u4I9qTg&s",
      link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2"
    },
    {
      
      title: "Chinese",
      text: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetMxg7P6iOGDXyU2cRJbiq3mYQoxVVlrwCQ&s",
      link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2"
    },

    {
      
      title: "Pastry",
      text: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLWO5Lls_zzhqO1YhgdKi1NslSW6sfknWqQ&s",
      link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2"
    },

    {
      
      title: "South-Indian",
      text: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSz-mCzieZGvtrFvVcGlnlIOZE6QGPuqFjfw&s",
      link: "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2"
    },
  {
    title: "Gulab Jamun",
    text: "",
    image: "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/gulab-jamun.png",
    link: "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2"
  },

  {
    title: "Pure Veg",
    text: "",
    image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/03/02201701/OmPureVeg1.jpg",
    link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2"
  },

  {
    title: "Lassi",
    text: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu04noWOQFkevpmMjoTXNRpzn28C0lsOPoKg&s",
    link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2"
  },

  {
    title: "Omlette",
    text: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbnh5a6QOXaIR6FTPQ_XkvuwmZbwvTmuiqQ&s",
    link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2"
  },

  {
    title: "Coffee",
    text: "",
    image: "https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2"
  },

  {
    title: "Rasgulla",
    text: "",
    image: "https://media.istockphoto.com/id/1283542929/photo/indian-rasgulla-or-dry-rosogulla-dessert-sweet-served-in-a-bowl.jpg?s=2048x2048&w=is&k=20&c=7FDXpOOYweN0ER0F-AccWLeuBTQK3oH32OH4fZ06Pyk=",
    link: "https://www.swiggy.com/collections/80388?collection_id=80388&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2"
  },

];





  
  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft -= 1200; // Adjust scroll amount as needed
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += 1200; // Adjust scroll amount as needed
    }
  }
}