import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { UserService } from 'src/app/service/user.service';
import { Convert as orderShowCvt,OrderShow  } from 'src/app/model/orderShow.mode';
import { Convert as InvoiceInfoCvt,InvoiceInfo  } from 'src/app/model/invoiceInfo.mode';
import { Convert as ListOrderCvt, ListOrder } from 'src/app/model/listorder.model';
@Component({
  selector: 'app-informationforcusto',
  templateUrl: './informationforcusto.component.html',
  styleUrls: ['./informationforcusto.component.scss']
})
export class InformationforcustoComponent {
  orderselect = Array<ListOrder>();
  listfood = Array<OrderShow>();
  constructor(private dataService : DataService,private http:HttpClient,private router:Router,private userService:UserService){
    console.log(this.dataService.selectorder)
    this.http.get(this.dataService.apiEndpoint+"/iorder/select/"+this.dataService.selectorder).subscribe((data:any)=>{
      this.orderselect = ListOrderCvt.toListOrder(JSON.stringify(data));
      console.log(this.orderselect);
    });
    console.log(this.dataService.selectorder)
    this.http.get(this.dataService.apiEndpoint+"/iorder/listselect/"+this.dataService.selectorder).subscribe((data:any)=>{
      this.listfood = orderShowCvt.toOrderShow(JSON.stringify(data));
      console.log(this.orderselect);
    });
  }
}
