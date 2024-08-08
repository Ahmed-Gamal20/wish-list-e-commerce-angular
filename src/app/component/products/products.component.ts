import { Component, Input } from '@angular/core';
import { ProductItem } from '../../interface/product';
// import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../service/product.service';
import { FavoritesService } from '../../service/favorites.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productitem:ProductItem[]=[];
  constructor(_productItem:ProductService, private favoritesService: FavoritesService){
_productItem.getProduct().subscribe(
  (da)=>{
  //  console.log(da);
   
   this.productitem=da
  
  })
}
 

  toggleFavorite(productId: number) {
    if (this.favoritesService.isFavorite(productId)) {
      this.favoritesService.removeFavorite(productId);
    } else {
      this.favoritesService.addFavorite(productId);
    }
  }

  isFavorite(productId: number): boolean {
    return this.favoritesService.isFavorite(productId);
  }
}









//   next:(res)=>{
//    this.product= res;
//   },
//   error:(err)=>{
//     return err;
//   },
//   complete:()=>{
//     console.log('done');
    
//   }
  
// })
  // }

