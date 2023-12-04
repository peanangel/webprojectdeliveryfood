import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Convert as orderShowCvt,OrderShow  } from 'src/app/model/orderShow.mode';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  carts :any;
  total:any;
  values : number=0;
  chk : any;
  model:any={};
  allow:any=true;
  pay = true;
  constructor(private dataService : DataService,private http:HttpClient,private router:Router){
    this.carts = this.dataService.cart;
    console.log("check",this.carts);
    this.total = this.dataService.total;
  }

  onKey(event:any){
    this.values =  event.target.value
    this.chk = this.values-(this.total+15);
    if(this.chk==0  && this.pay==false){
      this.allow = false;

    }else{
      this.allow = true;
    }
  }
  save(){
    let jsonobj={
      name :this.model.name,
      address:this.model.address,
      phone : this.model.phone,
      status: 3,
    }
    let jsonString = JSON.stringify(jsonobj);
    console.log(this.dataService.cart[0].orderid)
    console.log(this.carts[0].orderid)
    this.http.put(this.dataService.apiEndpoint+"/order61/"+this.dataService.cart[0].orderid,jsonString,{observe:'response'}).subscribe((response)=>{
      // console.log(JSON.stringify(response.status));
      // console.log(JSON.stringify(response.body));
      if( JSON.stringify(response.body)=='true'){
         alert('Save successfully')
      }
    });
    this.pay = false;
    this.allow = true;

  }
  payBill(){
    let jsonobj={
      id: 1
    }
    let jsonString = JSON.stringify(jsonobj);
    console.log(this.dataService.cart[0].orderid)
    console.log(this.carts[0].orderid)
    this.http.put(this.dataService.apiEndpoint+"/iorder/status/"+this.dataService.cart[0].orderid,jsonString,{observe:'response'}).subscribe((response)=>{
      if( JSON.stringify(response.body)=='true'){

        if(confirm('จะจ่ายไม่จ่าย') && this.allow == false){
          this.router.navigate(['/firstpage', { outlets: { shopoutlet: ['notifications']} }]);
        }
      }
    });
  }

}
