import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Modules/ProductOwner/sign-up/sign-up.component';
import { LoginComponent } from './Modules/ProductOwner/login/login.component';

import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { UserDetailsComponent } from './Modules/ProductOwner/user-details/user-details.component';

import { UsersListComponent } from './Modules/Admin/users-list/users-list.component';

import { ProductComponent } from './Modules/ProductOwner/product/product.component';
import { ProductListComponent } from './Modules/Admin/product-list/product-list.component';
import { ModifyproductComponent } from './Modules/ProductOwner/modifyproduct/modifyproduct.component';
import { AddproductComponent } from './Modules/ProductOwner/addproduct/addproduct.component';






const routes: Routes = [
  {
  path : 'Signup',
  component : SignUpComponent
  },
  {
   path : 'Login',
   component : LoginComponent
  },
  {
    path : 'Product',
    component: ProductComponent,
    canActivate : [AuthGuardGuard]
  },
  {
    path : 'AddProduct',
    component: AddproductComponent,
    canActivate : [AuthGuardGuard]
  },
  {
    path : 'ModifyProduct',
    component: ModifyproductComponent,
    canActivate : [AuthGuardGuard]
  },
  {
    path : 'UserDetails',
    component : UserDetailsComponent,
    canActivate : [AuthGuardGuard]
  },

  {
    path  : 'UsersList',
    component : UsersListComponent,
    canActivate : [AuthGuardGuard]

  },
  {
    path : 'ProductList',
    component : ProductListComponent,
    canActivate : [AuthGuardGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
