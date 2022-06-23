import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailProComponent } from './detail-pro/detail-pro.component';
import {NgPipesModule} from 'ngx-pipes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
    DetailProComponent,
    SearchComponent,
    ProductByCategoryComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgPipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxStarRatingModule

  ]
})
export class ShopModule { }
