import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Convert as CustomerCvt,Customer  } from 'src/app/model/customer.mode';
@Component({
  selector: 'app-loginowner',
  templateUrl: './loginowner.component.html',
  styleUrls: ['./loginowner.component.scss']
})
export class LoginownerComponent {
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
    this.http.post(this.userService.apiEndpoint+"/owner/login",jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      if(JSON.stringify(response.body)!='false'){
        this.router.navigate(['/mainowner', { outlets: { shopowneroutlet: ['order']} }]);
        this.user = CustomerCvt.toCustomer(JSON.stringify(response.body));
        this.userService.user = this.user;
        alert(' successfully')

      }else{
        console.log('cannot login')
        alert(' cannot login')
      }
    });
  }
}
