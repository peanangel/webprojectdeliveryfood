import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  model:any={};
  constructor(private formBuider:FormBuilder,private data: DataService,private http: HttpClient,private router : Router){

  }
  // ngOnInit(){
  //   this.signinForm = this.formBuider.group({
  //     name:[''],
  //     phone:[''],
  //     email:[''],
  //     password:[''],

  //   })
  // }

  signUp(){
    if(this.model.password != this.model.conpassword){
    alert('รหัสผ่านไม่ตรงกัน โปรดป้อนข้อมูลใหม่ค้าาาา')
    }else{
      let jsonobj={
        name :this.model.name,
        phone : this.model.phone,
        email : this.model.email,
        password : this.model.password,
      }
      let jsonString = JSON.stringify(jsonobj);
      this.http.post(this.data.apiEndpoint+"/customer/register",jsonString,{observe:'response'}).subscribe((response)=>{
        // console.log(JSON.stringify(response.status));
        // console.log(JSON.stringify(response.body));
        if( JSON.stringify(response.body)=='true'){
           alert('Register successfully')
          this.router.navigate(['/customer']);
          console.log('insert successfully')

        }else{
          console.log('cannot insert')
        }
      });
    }

  }
}
