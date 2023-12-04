import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Convert as CustomerCvt, Customer } from 'src/app/model/customer.mode';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  customer = Array<Customer>();
  constructor(private user : UserService,private http : HttpClient,private dataService : DataService){
    this.http.get(this.dataService.apiEndpoint+"/customer/"+this.user.user[0].cid).subscribe((data:any)=>{
      this.customer = CustomerCvt.toCustomer(JSON.stringify(data));
      console.log(this.customer);
    });
  }

}
