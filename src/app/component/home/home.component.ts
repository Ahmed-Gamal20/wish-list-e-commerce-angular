import { Component } from '@angular/core';
import { ProductItem } from '../../interface/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  productitem:ProductItem[]=[];
  constructor(_productItem:ProductService){
_productItem.getProduct().subscribe(
  (da)=>{
  //  console.log(da);
   
   this.productitem=da
  
  })
}
}
