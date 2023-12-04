import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-signupowner',
  templateUrl: './signupowner.component.html',
  styleUrls: ['./signupowner.component.scss']
})
export class SignupownerComponent {
  model:any={};
  constructor(private formBuider:FormBuilder,private data: DataService,private http: HttpClient,private router : Router){

  }



  signUpOwner(){
    if(this.model.password != this.model.conpassword){
    alert('รหัสผ่านไม่ตรงกัน โปรดป้อนข้อมูลใหม่ค้าาาา')
    }else{
      let jsonobj={
        name :this.model.name,
        email : this.model.email,
        password : this.model.password,
        phone : this.model.phone,
      }
      let jsonString = JSON.stringify(jsonobj);
      this.http.post(this.data.apiEndpoint+"/owner",jsonString,{observe:'response'}).subscribe((response)=>{
        // console.log(JSON.stringify(response.status));
        // console.log(JSON.stringify(response.body));
        if( JSON.stringify(response.body)=='true'){
           alert('Register successfully')
          this.router.navigate(['/owner']);
          console.log('insert successfully')

        }else{
          console.log('cannot insert')
        }
      });
    }
  }
}
