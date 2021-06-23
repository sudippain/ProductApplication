import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserslistService } from 'src/app/services/userslist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : any;
  constructor(private router:RouterModule,private userListService: UserslistService) { }

  ngOnInit() {
    this.allproductsDetails();
  }

  public allproductsDetails():void{
    this.userListService.AllProducts().subscribe(data=>{

      this.productList=data;
      console.log(this.productList.length);
      
     });
  }

}
