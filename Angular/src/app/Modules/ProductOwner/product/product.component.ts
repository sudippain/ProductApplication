import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/Model/product-details';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 productList : any;
 product : any;
 item : ProductDetails = new ProductDetails();


  editable:boolean=false; 


  productUpdateForm:FormGroup;
  submitted:boolean;
  visiQuantity:boolean=false;
  visiPrice:boolean=false;


  constructor(private productDetailsService : ProductdetailsService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.getProduct();
    this.submitted=false;
    this.productUpdateForm=this.formbuilder.group({

      quantity : ['',[Validators.required,Validators.pattern('^[1-9]*$')]],
      price :['',[Validators.required,Validators.pattern('^[1-9]*$')]]

    });

    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);
  
   function disableF5(e) {
      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   };
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
  public getProduct():void{
    this.editable=false;
   
    this.productDetailsService.getProduct().subscribe(data=>{

      this.productList=data;
      console.log(this.productList.length);
      
     });
  }

  editItem(productItem:any){
    var r=confirm("Want to Edit "+productItem.product);
    if(r==true){
    
      window.sessionStorage.setItem('product',productItem.product);
      this.router.navigate(['ModifyProduct']);

    }
  }
  // Not Used onSubmit block insted use ModifyProductDetails
  onSubmit(pd:ProductDetails){
  
    
pd.product=this.item.product;
   
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
       this.getProduct();
       
      },
      (error)=>{
        alert("Something Went Wrong");
        this.productUpdateForm.reset();
      }
      
    )
    // console.log(this.userLoginForm.value.userEmail);

           
  }

  onSave():void{
    console.log("Call OnSave method");
    this.router.navigate(['AddProduct']);
  }

  removeItem(id,product){
   
  
    var r=confirm("Want to delete "+product)
    if (r == true) {
      this.productDetailsService.removeProductItem(id).subscribe(data =>{
        this.getProduct();
      });
    } 
  
 
  // this.ngOnInit();

  
  
}

  logout()
  {
	  window.sessionStorage.clear();
    this.router.navigate(['Login']);

  }


}
