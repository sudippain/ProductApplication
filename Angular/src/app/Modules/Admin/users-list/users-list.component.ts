import { Component, OnInit } from '@angular/core';
import { UserslistService } from 'src/app/services/userslist.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList:any;
  userSearchForm:FormGroup;
  constructor(private userListService: UserslistService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {

//     this.userSearchForm=this.formbuilder.group({
//       userName:['',[Validators.required]]
//      });
     
// console.log(this.userSearchForm.value);
    this.allUsers();
  }

  public allUsers(){

    this.userListService.AllUsersList().subscribe( data=>{

      this.usersList=data;
      console.log(this.usersList);
    });
  }
  //  public getUser(user:User):void{
  //    console.log(user);
    
  //   this.userListService.GetUser(user.userName).subscribe(data =>{
  //     this.usersList=data;
  //   });
  //  }

  
  changeStatus(userEmail:string,status:boolean):void{
   
  
      if(status){
        var r=confirm("Want To Blacklisted"+" "+userEmail);
        if(r==true){
        this.userListService.changeUserStatus(userEmail).subscribe(data=>{
          this.allUsers();
        });
      }
      else{
      
      }
      
    }
      else{
        var r=confirm("Want To Reatain"+" "+userEmail);
        if(r==true){
        this.userListService.changeUserStatus(userEmail).subscribe(data=>{
          
          this.allUsers();
        },
        (error)=>{
          alert("Something Went Wrong");
         
        }
        
        );
      }
      else{
        
      }
     
      }  

  }

  getDynamic(searchValue:String){
    console.log(searchValue);
    if(searchValue.length==0){
      this.allUsers();
    }
      else{

        this.userListService.GetUser(searchValue).subscribe(data =>{
          this.usersList=data;
        
      });
    }
  }

  logout()
  {
	  window.sessionStorage.clear();
    this.router.navigate(['Login']);
  }

}

