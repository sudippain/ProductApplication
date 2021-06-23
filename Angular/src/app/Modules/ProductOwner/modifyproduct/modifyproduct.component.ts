import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/Model/product-details';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.css']
})
export class ModifyproductComponent implements OnInit {

  productUpdateForm:FormGroup;
  submitted:boolean;
  visiQuantity:boolean=false;
  visiPrice:boolean=false;
  item:any;

  constructor(private productDetailsService : ProductdetailsService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.item = window.sessionStorage.getItem('product');
    this.submitted=false;
    this.productUpdateForm=this.formbuilder.group({

      quantity : ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      price :['',[Validators.required,Validators.pattern('^[0-9]*$')]]

    });
  }

  get f() {
    // console.log(this.userLoginForm.value.userEmail);
    return this.productUpdateForm.controls;
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
  
       pd.product=window.sessionStorage.getItem('product');
      this.submitted=true;
      console.log(pd);
    
      if(this.productUpdateForm.invalid)
      return;
      this.productDetailsService.updateProductItem(pd).subscribe(
        data => {
          
          
        if(data.toString().match("Product Not Found")){
          alert("Product Not Found");
          
        }
        // this.productUpdateForm.reset;
        this.router.navigate(['Product']);
         
        },
        (error)=>{
          alert("Something Went Wrong");
          this.productUpdateForm.reset();
        }
        
      )
      // console.log(this.userLoginForm.value.userEmail);
  
             
    }

}
