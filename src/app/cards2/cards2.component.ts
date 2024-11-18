import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})

export class Cards2Component {
  @Input() searchTerm: string = '';
  @Input() restaurants1: any[] = [
        {
          name: 'Subway',
          star: "3.5",
          time: '40-50 min',
          description: 'Healthy food, salad, snacks, salad',
          image: 'https://images.unsplash.com/photo-1655195672440-c8c62902a05c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww',
          category: 'veg',
          price: 200,
          overText: '20% off on orders above ₹299',  // New field
          links: { cart: '#' }
        },
        {
          name: 'Bistro Cafe',
          star: "4.2",
          time: '25-30 min',
          description: 'Best burgers in town!',
          image: 'https://amindfullmom.com/wp-content/uploads/2022/07/Veggie-Wrap-Recipe.jpg',
          category: 'non-veg',
          price: 350,
          overText: '',  // New field (empty if no promotion)
          links: { cart: '#' }
        },
        {
          name: 'KFC',
          star: "4.8",
          time: '40-50 min',
          description: 'Burgers, American',
          image: 'https://images.ctfassets.net/wtodlh47qxpt/2MisPscDV1k33qLnGwQ2il/14bdab6e4b9e25e1b91a8578df5097f2/CAT86',
          category: 'non-veg',
          price: 250,
          overText: '30% off above ₹199',  // New field
          links: { cart: '#' }
        },
        {
          name: 'Burger Bistro',
          star: "5",
          time: '40-50 min',
          description: 'Burgers, Rolls, Wraps',
          image: 'https://www.foodie-trail.com/wp-content/uploads/2020/08/1520e8f5-a976-473f-bbe6-f48da762eda4.jpg',
          category: 'non-veg',
          price: 400,
          overText: 'Exclusive combo offer!',  // New field
          links: { cart: '#' }
        },
        {
          name: 'Belgian Waffle',
          star: "5",
          time: '40-50 min',
          description: 'Waffles, Deserts, Ice-Cream',
          image: 'https://www.southernliving.com/thmb/oc54XSy5d5uFeGQYsqse8DsTtXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Brownie-Ice-Cream-Sandwiches-c7e98df8486a42f1b25853af0f0baa66.jpg',
          category: 'dessert',
          price: 320,
          overText: '',  // New field (no promotion)
          links: { cart: '#' }
        }
      ];
      
  
       
      @Input() restaurants2: any[]= [{
          name: 'Amul Ice-Cream Parlour',
          overText:'Items at just ₹99',
          star:"4.6",
          time:'10-20 min',
          description: 'deserts,ice-cream,ice-cream cakes',
          image: 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          links: {
            cart: '#',
          
          }
        },
        {
          name: 'Saini Veg Dhaba',
          star:"4.2",
          time:'25-30 min',
          description: 'North Indian',
          image: 'https://content.jdmagicbox.com/comp/ahmedabad/f3/079pxx79.xx79.180830172144.t8f3/catalogue/fauji-dhaba-lambha-ahmedabad-dhaba-restaurants-4qjvaet91i.jpg',
          links: {
            cart: '#',
           
          }
        },
        {
          name: 'Hungry Point',
          overText:'₹125 off above ₹199' ,
          star:"3.8",
          time:'40-45 min',
          description: 'Fast Food, Snacks',
          image: 'https://static.toiimg.com/thumb/84761617.cms?width=573&height=430&imgsize=308529',
         
          links: {
            cart: '#',
            
          }
        },
        {
          name: 'Chennai Dosa House',
          star:"5",
          time:'40-50 min',
          description: 'Dosa',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5m_cS8nr7kQqpkYwXTr7WcTg2altRaVImkg&s',
          links: {
            cart: '#',
           
          }
        },
        {
          name: 'Chai Sutta Bar',
          overText:'₹99 off above ₹239' ,
          star:"4.7",
          time:'20-25 min',
          description: 'Beverages,Burgers',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIAtXzRix0yDfMfPWWBtWhyz-4mW_S-PecULmh9Ft8wJ8JQGsA9lj4x9Us0_R2KchJ84&usqp=CAU',
          links: {
            cart: '#',
            
          }
        },
        
      ];
      @Input() restaurants3: any[]  = [{
          name: 'Sonu Naan Wala',
          star:"4.4",
          time:'10-20 min',
          description: 'Naan',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1c4jW7gTvrOEMYbBdeGTu0wg5wtnekf3ug&s',
          links: {
            cart: '#',
          
          }
        },
        {
          name:'Raju Chole Bhature',
          overText:'cold drink worth ₹25 free',
          star:"4.2",
          time:'25-30 min',
          description: 'Chole Bhature',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJJqv7kAd4TNi7-1VfDwAIhEHjFYpymDSLg&s',
          links: {
            cart: '#',
           
          }
        },
        {
          name: 'Guru Ji Naan Wale',
          star:"3.8",
          time:'40-45 min',
          description: 'Fast Food, Snacks',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1UqXILbuYvsqb3PVlBL_-UGgVuY6DKw3SQ&s',
         
          links: {
            cart: '#',
            
          }
        },
        {
          name: 'Hyedrabadi Biryani',
          star:"4.8",
          time:'30-40 min',
          description: 'Veg Biryani,Chicken Biryani',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HHw5Q-fZv52oTxWacSNfFFnxwhHfweb6TQ&s',
          links: {
            cart: '#',
           
          }
        },
        {
          name: 'Guruji Ki Rasoi',
          overText:'₹50 off above ₹239' ,
          star:"4.7",
          time:'20-25 min',
          description: 'Breakfast,Lunch,Dinner',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrY-YDbNH_JLFnMOh26A1l7WKFgORHz6C3uQ&s',
          links: {
            cart: '#',
            
          }
        },
        
      ];

      @Input() restaurants4: any[]= [{
      
            name: 'The Dessert Lab',
            overText: '',
            star: "4.8",
            time: '15-25 min',
            description: 'Gourmet desserts, Cakes, Pastries',
            image: 'https://img.freepik.com/free-photo/whipped-cream-chocolate-berries-galore-gourmet-indulgence-generated-by-ai_188544-9812.jpg?semt=ais_hybrid',
            links: {
              cart: '#',
            }
          },
          {
            name: 'Punjabi Shakti',
            star: "4.5",
            time: '20-30 min',
            description: 'North Indian, Tandoor, Parathas',
            image: 'https://media.istockphoto.com/id/1266579516/photo/indian-traditional-thali-food-dal-makhani-served-with-chapati-papad-kadai-paneer-or-lemon-on.jpg?s=612x612&w=0&k=20&c=_OYAXix_rJeoEgOxyPc-k6wZtZ_-cbcdO_05257zjno=',
            links: {
              cart: '#',
            }
          },
          {
            name: 'The Snack Corner',
            overText: '',
            star: "4.2",
            time: '30-40 min',
            description: 'Snacks, Sandwiches, Smoothies',
            image: 'https://media.istockphoto.com/id/1154731746/photo/cheeseburger-with-cola-and-french-fries.jpg?s=612x612&w=0&k=20&c=DfuI7KyMDIF8_JH66oAhIZLOgL4RRXulfv24PQ5vTEo=',
            links: {
              cart: '#',
            }
          },
          {
            name: 'Dosa Magic',
            star: "4.9",
            time: '35-45 min',
            description: 'Authentic Dosa, South Indian',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinCKGPNr2g5zx4Qet43b2n3rGXhO-_ppJww&s',
            links: {
              cart: '#',
            }
          },
          {
            name: 'Brew & Bite Café',
            overText: '₹100 off on orders above ₹250',
            star: "4.7",
            time: '15-20 min',
            description: 'Coffee, Fast Food, Breakfast',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/65/4c/98/cafe-edelweiss.jpg',
            links: {
              cart: '#',
            }
          }
        ]
        
      
  

    @Input() restaurants5: any[]= [{
     
          name: 'Ice Cream Treats',
          overText: '',
          star: "4.9",
          time: '15-20 min',
          description: 'Premium Ice Creams, Sundaes, Shakes',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9zVh4WY4ThEhV8-Zzr7F5_JBRixrmJ_DLg&s',
          links: {
            cart: '#',
          }
        },
        {
          name: 'Tandoori Express',
          star: "4.3",
          time: '30-40 min',
          description: 'Tandoori Kebabs, North Indian, Biryani',
          image: 'https://media.gettyimages.com/id/552153203/photo/fresh-tandoori-roti-baked-in-oven.jpg?s=612x612&w=gi&k=20&c=DS6TeZXJ60UQ37aH8lVw6Sh8JW5SBTgKROSWIqB5YWE=',
          links: {
            cart: '#',
          }
        },
        {
          name: 'Fresh Bites',
          overText: 'Get a free drink with every combo!',
          star: "4.6",
          time: '20-30 min',
          description: 'Breakfast,Lunch,Dinner',
          image: 'https://b.zmtcdn.com/data/dish_photos/981/0c105310fcc60deb73bd90cfc8a63981.jpg',
          links: {
            cart: '#',
          }
        },
        {
          name: 'Mamma’s Kitchen',
          star: "5",
          time: '35-50 min',
          description: 'Home-style Indian Meals, Roti, Sabzi',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhwUvouzX8d9PHaOJ1UP81ZipD8MykMYO-g&s',
          links: {
            cart: '#',
          }
        },
        {
          name: 'The Chai Spot',
          overText: 'Free delivery on orders above ₹299',
          star: "4.8",
          time: '15-20 min',
          description: 'Chai, Samosas, Sandwiches',
          image: 'https://www.teacupsfull.com/cdn/shop/articles/Screenshot_2023-10-20_at_11.07.13_AM.png?v=1697780292',
          links: {
            cart: '#',
          }
        },
        
    
  ];

      cities = [
          { city: 'Palampur', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Shimla', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Dharamshala', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Manali', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Kullu', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Solan', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Chamba', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
          { city: 'Mandi', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Delhi', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Mumbai', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Bengaluru', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Chennai', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Kolkata', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Hyderabad', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Pune', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Ahmedabad', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Kolkata', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Hyderabad', link: "https://www.swiggy.com/chinese-restaurants-near-mehttps://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Pune', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { city: 'Ahmedabad', link: "https://www.swiggy.com/chinese-restaurants-near-me" }
          ];
    
          cuisines = [
            { cuisine: 'Chinese Restaurant Near Me', link: "https://www.swiggy.com/chinese-restaurants-near-me" },
            { cuisine: 'South Indian Restaurant Near Me', link: "https://www.swiggy.com/south-indian-restaurants-near-me" },
            { cuisine: 'Indian Restaurant Near Me', link: "https://www.swiggy.com/indian-restaurants-near-me" },
            { cuisine: 'Kerala Restaurant Near Me', link: "https://www.swiggy.com/kerala-restaurants-near-me" },
            { cuisine: 'Korean Restaurant Near Me', link: "https://www.swiggy.com/korean-restaurants-near-me" },
            { cuisine: 'North Indian Restaurant Near Me', link: "https://www.swiggy.com/north-indian-restaurants-near-me" },
            { cuisine: 'Sea Food Restaurant Near Me', link: "https://www.swiggy.com/seafood-restaurants-near-me" },
            { cuisine: 'Bengali Restaurant Near Me', link: "https://www.swiggy.com/bengali-restaurants-near-me" },
            { cuisine: 'Punjabi Restaurant Near Me', link: "https://www.swiggy.com/punjabi-restaurants-near-me" },
            { cuisine: "Italian Restaurant Near Me", link: "https://www.swiggy.com/italian-restaurants-near-me" },
          ];

          exploreSections = [
            { explore: 'Explore Restaurants Near Me', link: "https://www.swiggy.com/restaurants-near-me" },
            { explore: 'Explore Dhabas Near Me', link: "https://www.swiggy.com/best-restaurants-near-me" },
          ]



          get filteredRestaurants() {
    const searchTermLower = this.searchTerm.toLowerCase();

    // Filter for restaurants1, restaurants2, and restaurants3
    const filteredRestaurants1 = this.restaurants1.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTermLower) || 
      restaurant.description.toLowerCase().includes(searchTermLower)
    );
    const filteredRestaurants2 = this.restaurants2.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTermLower) || 
      restaurant.description.toLowerCase().includes(searchTermLower)
    );
    const filteredRestaurants3 = this.restaurants3.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTermLower) || 
      restaurant.description.toLowerCase().includes(searchTermLower)
    );
    const filteredRestaurants4 = this.restaurants4.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTermLower) || 
      restaurant.description.toLowerCase().includes(searchTermLower)
    );
    const filteredRestaurants5 = this.restaurants5.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTermLower) || 
      restaurant.description.toLowerCase().includes(searchTermLower)
    );
 
    // Filter for cities and cuisines based on search term
    const filteredCities = this.cities.filter(city =>
      city.city.toLowerCase().includes(searchTermLower)
    );
    const filteredCuisines = this.cuisines.filter(cuisine =>
      cuisine.cuisine.toLowerCase().includes(searchTermLower)
    );
    const filteredExplore = this.exploreSections.filter(explore =>
      explore.explore.toLowerCase().includes(searchTermLower)
    );

    // Combine all the filtered results into a single array and return
    return {
      filteredRestaurants: [...filteredRestaurants1, ...filteredRestaurants2, ...filteredRestaurants3, ...filteredRestaurants4, ...filteredRestaurants5],
      filteredCities,
      filteredCuisines,
      filteredExplore
    };
  }

    }

    //   filteredRestaurants1 = this.restaurants1;

    //   // Properties to keep track of applied filters
    //   appliedFilters = {
    //     category: [] as string[],
    //     price: [] as string[],
    //     rating: [] as number[]
    //   };
    
    //   // Method to filter restaurants by category
    //   filterByCategory(category: string) {
    //     console.log("Category filter clicked: ", category); // Log when filter is clicked
    //     if (this.appliedFilters.category.includes(category)) {
    //       this.appliedFilters.category = this.appliedFilters.category.filter(c => c !== category);
    //     } else {
    //       this.appliedFilters.category.push(category);
    //     }
    //     this.applyFilters();
    //   }
    
    //   // Method to filter restaurants by price range
    //   filterByPriceRange(range: string) {
    //     console.log("Price filter clicked: ", range); // Log when filter is clicked
    //     if (this.appliedFilters.price.includes(range)) {
    //       this.appliedFilters.price = this.appliedFilters.price.filter(r => r !== range);
    //     } else {
    //       this.appliedFilters.price.push(range);
    //     }
    //     this.applyFilters();
    //   }
    
    //   // Method to filter restaurants by star rating
    //   filterByStarRating(rating: number) {
    //     console.log("Rating filter clicked: ", rating); // Log when filter is clicked
    //     if (this.appliedFilters.rating.includes(rating)) {
    //       this.appliedFilters.rating = this.appliedFilters.rating.filter(r => r !== rating);
    //     } else {
    //       this.appliedFilters.rating.push(rating);
    //     }
    //     this.applyFilters();
    //   }
    
    //   // Main method to apply filters on all categories of restaurants
    //   applyFilters() {
    //     console.log("Applying filters", this.appliedFilters); // Log applied filters
    //     this.filteredRestaurants1 = this.filterRestaurants(this.restaurants1);
    //     console.log("Filtered results", this.filteredRestaurants1); // Log filtered results
    //   }
    
    //   // Method to filter individual restaurant list based on filters
    //   filterRestaurants(restaurants: any[]) {
    //     return restaurants.filter(restaurant => {
    //       const matchesCategory = this.appliedFilters.category.length === 0 || 
    //         this.appliedFilters.category.includes(restaurant.description.toLowerCase().includes('veg') ? 'veg' : 'non-veg');
    //       const matchesPrice = this.appliedFilters.price.length === 0 || 
    //         this.appliedFilters.price.some(range => this.priceMatch(range, restaurant.description));
    //       const matchesRating = this.appliedFilters.rating.length === 0 || 
    //         this.appliedFilters.rating.some(rating => parseFloat(restaurant.star) >= rating);
    
    //       console.log("Filtering restaurant", restaurant.name, { matchesCategory, matchesPrice, matchesRating });
          
    //       return matchesCategory && matchesPrice && matchesRating;
    //     });
    //   }
    
    //   // Helper function to determine if the restaurant matches a price range filter
    //   priceMatch(range: string, description: string) {
    //     const price = description.match(/\d+/g); // Extract price from description if present
    //     if (!price) return false;
    //     const numericPrice = parseInt(price[0], 10);
    //     if (range === 'under-300') return numericPrice < 300;
    //     if (range === '300-400') return numericPrice >= 300 && numericPrice <= 400;
    //     return false;
    //   }
    
