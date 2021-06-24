import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserslistService } from 'src/app/services/userslist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : any;
  product:any;
  constructor(private router:Router,private userListService: UserslistService) { }

  ngOnInit() {
    this.allproductsDetails();
  }

  public allproductsDetails():void{
    this.userListService.AllProducts().subscribe(data=>{

      this.productList=data;
      console.log(this.productList.length);
      
     },
     (error)=>{
      console.log(error.status);
      if(error.status==400){
        alert("You don't have permission,Only Admin can access");
        this.router.navigate(['Product']);
      }
      else{ alert("Something Went Wrong");}
     // 
     
    }
     
     );
  }
  logout()
  {
	  window.sessionStorage.clear();
    this.router.navigate(['Login']);
  }

}
