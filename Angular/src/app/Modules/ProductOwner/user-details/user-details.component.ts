import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { User } from 'src/app/Model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: User=new User();

  constructor(private userDetailsService : UserdetailsService,private router:Router) { }

  ngOnInit() {

   this.specificUserDetails();
  }

  public specificUserDetails():void{

    this.userDetailsService.userDetails().subscribe((response:User) =>{
     
      this.userDetails=response;
      
      console.log(this.userDetails.userEmail);
      console.log(this.userDetails.userName);
      console.log(this.userDetails.userContactNumber);
      console.log(this.userDetails.role);
    });
  }


  
  logout()
  {
	  window.sessionStorage.clear();
    this.router.navigate(['Login']);

  }




}
