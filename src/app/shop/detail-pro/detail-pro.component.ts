import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from 'src/app/dashboard/category.service';
import { CommentService } from 'src/app/dashboard/comment/comment.service';
import { DialogService } from 'src/app/dashboard/dialog.service';
import { ProductService } from 'src/app/dashboard/product/product.service';
import { Cart } from '../cart';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.scss']
})
export class DetailProComponent implements OnInit {

  id!: number;
  private sub: any;

  product:any;
  category:any;
  comment:any;
 
  userid=localStorage.getItem('userid');
  constructor(private proservice:ProductService,private route: ActivatedRoute,private dialog:DialogService,private commentService:CommentService,private shopService:ShopService,private cateService:CategoryService) { }
  
  ngOnInit(): void {
    
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.proservice.getProduct(this.id).subscribe(data=>{
        console.log("xxxxxxxxxxxxxxxxxxxxxxx");
        this.product=data;
        console.log(data);
      });
   });


   this.commentService.getAllCommentInProduct(this.id).subscribe(data=>{
    this.comment=data;
    console.log('cmt',data);
   });

   this.shopService.getProductByCategory(1).subscribe(data=>{
    this.category=data;
    console.log('cate',data)
  });



   
  }

  openAddComment(id:number)
  {
    this.dialog.openDialogAddComment(id);
  }

  openRepComment(cmt:number)
  {
   
    this.dialog.openDialogRepComment(this.id,cmt);
  }

  removeComment(id:number)
  {
      this.commentService.removeComment(id).subscribe(data=>{

      })
  }

  cart=new Cart(0,1,'');
  addCart(data:number)
  {
    this.cart.sanpham=data;
    this.cart.userid=localStorage.getItem('userid')!;
    console.log(this.cart);
    this.shopService.addCart(this.cart).subscribe(data1=>{
      if(data1.status==200)
      {
        alert(data1.msg);
      }

    });
  }

  goToProductDetails(id:number){

  }

  addToWishList(id:number)
  {
    
  }


}
