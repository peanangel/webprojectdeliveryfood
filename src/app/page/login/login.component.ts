import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Convert as CustomerCvt,Customer  } from 'src/app/model/customer.mode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model:any={};
  user :any=[];
  constructor(private userService : UserService ,private http: HttpClient,private router : Router){

  }
  login(){
    console.log(this.model.email);
    let jsonobj={
      email :this.model.email,
      password : this.model.password,
    }
    let jsonString = JSON.stringify(jsonobj);
    
    this.http.post(this.userService.apiEndpoint+"/customer/login",jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      if(JSON.stringify(response.body)!='false'){
        this.router.navigate(['/firstpage', { outlets: { shopoutlet: ['main']} }]);
        alert(' successfully')
        this.user = CustomerCvt.toCustomer(JSON.stringify(response.body));
        this.userService.user = this.user;
      }else{
        console.log('cannot login')
        alert(' cannot login')
      }
    });
    // console.log(this.userService.user);
  }
}
