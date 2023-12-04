import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Convert as CustomerCvt, Customer } from 'src/app/model/customer.mode';
import { DataService } from 'src/app/service/data.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  customer = Array<Customer>();
  constructor(private user : UserService,private http : HttpClient,private dataService : DataService){
    this.http.get(this.dataService.apiEndpoint+"/customer/"+this.user.user[0].cid).subscribe((data:any)=>{
      this.customer = CustomerCvt.toCustomer(JSON.stringify(data));
      console.log(this.customer);
    });
  }
}
