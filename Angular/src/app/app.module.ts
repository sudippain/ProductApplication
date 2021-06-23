import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Modules/ProductOwner/sign-up/sign-up.component';
import { LoginComponent } from './Modules/ProductOwner/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginService } from './services/login.service';
import { SignUpService } from './services/sign-up.service';


import { httpInterceptorProviders } from './auth-intercepter';
import { UserDetailsComponent } from './Modules/ProductOwner/user-details/user-details.component';

import { UsersListComponent } from './Modules/Admin/users-list/users-list.component';

import {NgxPaginationModule} from 'ngx-pagination'; 

import { ProductComponent } from './Modules/ProductOwner/product/product.component';
import { ProductListComponent } from './Modules/Admin/product-list/product-list.component';
import { ModifyproductComponent } from './Modules/ProductOwner/modifyproduct/modifyproduct.component';
import { AddproductComponent } from './Modules/ProductOwner/addproduct/addproduct.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    UserDetailsComponent,
    UsersListComponent,
    ProductComponent,
    ProductListComponent,
    ModifyproductComponent,
    AddproductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  providers: [LoginService,SignUpService,httpInterceptorProviders
      

],
  bootstrap: [AppComponent]
})
export class AppModule { }
