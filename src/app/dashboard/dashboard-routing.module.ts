import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

import { AccountComponent } from './account/account.component';
import { AdminCreateComponent } from './account/admin-create/admin-create.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { DashboardComponent } from './dashboard.component';
import { ImportCreComponent } from './import/import-cre/import-cre.component';
import { ImportComponent } from './import/import.component';
import { InvoiceConfirmComponent } from './invoice/invoice-confirm/invoice-confirm.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StatisticalComponent } from './invoice/statistical/statistical.component';
import { ProCreateComponent } from './product/pro-create/pro-create.component';
import { ProDetailComponent } from './product/pro-detail/pro-detail.component';
import { ProEditComponent } from './product/pro-edit/pro-edit.component';
import { ProductComponent } from './product/product.component';
import { SaleOffComponent } from './sale-off/sale-off.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SupplierCreateComponent } from './supplier/supplier-create/supplier-create.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TrademarkComponent } from './trademark/trademark.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        
      }
    ]
  },
  //Category
  {
      path: 'category',
      component: CategoryComponent
   
  },
  //product
  {
    path: 'product',
    component: ProductComponent
  },{
    path: 'product/pro-detail/:id',
    component: ProDetailComponent
  },
  {
    path: 'product/pro-edit/:id',
    component: ProEditComponent
  },
  {
    path: 'product/create',
    component: ProCreateComponent
  },
  //invoice
  {
    path: 'invoice',
    component: InvoiceComponent
  },{
    path: 'invoice/confirm',
    component: InvoiceConfirmComponent
  },
  {
    path: 'statistical',
    component: StatisticalComponent
  },
  //account
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account/edit',
    component: EditAccountComponent
  },
  {
    path: 'account/admin-create',
    component: AdminCreateComponent
  },
  //comment
  {
    path: 'comment',
    component: CommentComponent
  },
  //import
  {
    path: 'import',
    component: ImportComponent
  },
  {
    path: 'import/create',
    component: ImportCreComponent
  },
  {
    path: 'supplier',
    component: SupplierComponent
  },
  {
    path: 'supplier/create',
    component: SupplierCreateComponent
  },
  //trademaark
  {
    path: 'brand',
    component: TrademarkComponent
  },
  //
  //trademaark
  {
    path: 'slideshow',
    component: SlideShowComponent
  },
  //saleoff
  {
    path: 'sale-off',
    component: SaleOffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
