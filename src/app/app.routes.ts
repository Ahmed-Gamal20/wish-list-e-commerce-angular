import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
// import { ProductComponent } from './component/product/product.component';
import { FavoritesComponent } from './component/wish/wish.component';
import { ProductsComponent } from './component/products/products.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"pro",component:ProductsComponent},
    {path:"fav",component:FavoritesComponent},
    {path:"**",redirectTo:"home",pathMatch:"full"}
];
