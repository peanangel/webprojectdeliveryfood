import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Convert as CustomerCvt, Customer } from 'src/app/model/customer.mode';
import { DataService } from 'src/app/service/data.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-profileowner',
  templateUrl: './profileowner.component.html',
  styleUrls: ['./profileowner.component.scss']
})
export class ProfileownerComponent {
  owner = Array<Customer>();
  constructor(private user : UserService,private http : HttpClient,private dataService : DataService){
    this.owner = this.user.user;
    // this.http.get(this.dataService.apiEndpoint+"/owner/"+this.user.userowner[0].cid).subscribe((data:any)=>{
    //   this.owner = CustomerCvt.toCustomer(JSON.stringify(data));
    //   console.log("owner == ",this.owner);
    // });
  }
}
