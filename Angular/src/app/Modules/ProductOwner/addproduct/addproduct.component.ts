import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/Model/product-details';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productUpdateForm:FormGroup;
  submitted:boolean;
  visiProduct:boolean=false;
  visiQuantity:boolean=false;
  visiPrice:boolean=false;
  constructor(private productDetailsService : ProductdetailsService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.submitted=false;
    this.productUpdateForm=this.formbuilder.group({

      product : ['',[Validators.required,Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      quantity : ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      price :['',[Validators.required,Validators.pattern('^[0-9]*$')]]

    });
  }

  get f() {
    // console.log(this.userLoginForm.value.userEmail);
    return this.productUpdateForm.controls;
  }
  focusInFunctionProduct(){
    
    this.visiProduct=true;
 }
 focusOutFunctionProduct(){
   
   this.visiProduct=false;
}
  focusInFunctionQuantity(){
    
    this.visiQuantity=true;
 }
 focusOutFunctionQuantity(){
   
   this.visiQuantity=false;
}

  focusInFunction(){
    
     this.visiPrice=true;
  }
  focusOutFunction(){
    
    this.visiPrice=false;
 }

 onSubmit(pd:ProductDetails){
  
 
 this.submitted=true;
 console.log(pd);

 if(this.productUpdateForm.invalid)
    return;

 this.productDetailsService.addProductItem(pd).subscribe(
   data => {
     
    

   console.log(data);
   // this.productUpdateForm.reset;
   this.router.navigate(['Product']);
    
   },
   (error)=>{
     console.log(error.status);
     if(error.status==409){
       alert("Product Already Present")
     }
     else{ alert("Something Went Wrong");}
    // 
     this.productUpdateForm.reset();
   }
   
 )
 // console.log(this.userLoginForm.value.userEmail);

        
}
logout()
{
  window.sessionStorage.clear();
  this.router.navigate(['Login']);

}

}
