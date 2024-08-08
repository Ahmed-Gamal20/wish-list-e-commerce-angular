// import { Component } from '@angular/core';
// import { Product } from '../../interface/wish';
// import { NgClass, NgFor } from '@angular/common';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-wish',
//   standalone: true,
//   imports: [NgFor,NgClass,CommonModule],
//   templateUrl: './wish.component.html',
//   styleUrl: './wish.component.css'
// })
// export class WishComponent {
//   products: Product[] = [
//     { id: 1, name: 'Product 1', description: 'Description 1', price: 100, isFavorite: false },
//     { id: 2, name: 'Product 2', description: 'Description 2', price: 200, isFavorite: false },
//     // Add more products as needed
//   ];

//   toggleFavorite(product: Product) {
//     product.isFavorite = !product.isFavorite;
//   }

//   // optional

  

// }


import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../service/favorites.service';
import { NgClass, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ProductItem } from './../../interface/product';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgFor,NgClass,CommonModule],
  templateUrl: '../wish/wish.component.html',
  styleUrls: ['../wish/wish.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: any[] = [];
  productitem:ProductItem[]=[];

  constructor(private favoritesService: FavoritesService,private _productItem:ProductService) {
  
_productItem.getProduct().subscribe(
  (da)=>{
  //  console.log(da);
   
   this.productitem=da
  
  })

}
  // ngOnInit() {
  //   const favoriteIds = this.favoritesService.getFavorites();
  //   // Assuming you have a method to fetch products by their IDs
  //   this.favoriteProducts = this.fetchProductsByIds(favoriteIds);
  // }

  // fetchProductsByIds(ids: number[]): any[] {
  //   // Mock implementation, replace with actual data fetching logic
  //   const allProducts = this.productitem;
  //   return allProducts.filter(product => ids.includes(product.id));
  // }

  // removeFavorite(productId: number) {
  //   this.favoritesService.removeFavorite(productId);
  //   this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== productId);
  // }



  ngOnInit() {
    this._productItem.getProduct().subscribe(products => {
      const favoriteIds = this.favoritesService.getFavorites();
      this.favoriteProducts = products.filter(product => favoriteIds.includes(product.id));
    });
  }

  removeFavorite(productId: number) {
    this.favoritesService.removeFavorite(productId);
    this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== productId);
  }
}


