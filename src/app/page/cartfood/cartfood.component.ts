import { Component } from '@angular/core';
import { DialogproceedComponent } from '../dialogproceed/dialogproceed.component';
import {MatDialog} from '@angular/material/dialog';
import { InsertComponent } from '../insert/insert.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { DataService } from 'src/app/service/data.service';
import { Convert as orderShowCvt,OrderShow  } from 'src/app/model/orderShow.mode';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { Food } from 'src/app/model/food.mode';
import { Orderamount } from 'src/app/model/orderamount.mode';

@Component({
  selector: 'app-cartfood',
  templateUrl: './cartfood.component.html',
  styleUrls: ['./cartfood.component.scss']
})
export class CartfoodComponent {
  total:number=0;
  carts = Array<OrderShow>();
  cartItem=[];
  show = Array<OrderShow>();
  amoutsSet = new Set<Number>();
  amounts : any;
  constructor(public dialog: MatDialog, private dataService:DataService,private http:HttpClient,private userService :UserService) {

    http.get(userService.apiEndpoint+"/order/listfood/"+this.userService.user[0].cid).subscribe((data:any)=>{
      this.carts = orderShowCvt.toOrderShow(JSON.stringify(data));
      console.log(this.carts);
       this.carts.forEach(element => {
        this.total += element.price*element.amount;


      this.amoutsSet.add(element.amount);
    });
    this.dataService.cart = Array.from(data);
    console.log(this.total)
    this.amounts = Array.from(this.amoutsSet);
    });
    this.dataService.cart = this.carts;
    this.dataService.total = this.total;
  }
  payTheBill(){
    this.dataService.total = this.total;
    this.dialog.open(DialogproceedComponent,{
      minWidth:'100px',
    });
  }
  plus(food:OrderShow){


    if(food.amount == 5){
      food.amount =5;
    }
    else{
      this.total += food.price
      console.log(food.foodid)
    let jsonobj={
      cusid:this.userService.user[0].cid,
      foodid:food.foodid,
      amount:food.amount+1,
      total:this.total
    }
    let jsonString = JSON.stringify(jsonobj);
    this.http.put(this.dataService.apiEndpoint+"/orderamount",jsonString,{observe:'response'}).subscribe((response)=>{

        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.http.get(this.userService.apiEndpoint+"/order/listfood/"+this.userService.user[0].cid).subscribe((data:any)=>{
          this.carts = orderShowCvt.toOrderShow(JSON.stringify(data));
          console.log(this.carts);
          this.carts.forEach(element => {

          this.amoutsSet.add(element.amount);
        });
        this.amounts = Array.from(this.amoutsSet);
        });
    });
    }



  }
  minus(food:OrderShow){
    if(food.amount == 1){
      food.amount =1;
    }
    else{
      this.total -= food.price
      console.log(food.foodid)
    let jsonobj={
      cusid:this.userService.user[0].cid,
      foodid:food.foodid,
      amount:food.amount-1,
      total:this.total
    }
    let jsonString = JSON.stringify(jsonobj);
    this.http.put(this.dataService.apiEndpoint+"/orderamount",jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));


        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));

        this.http.get(this.userService.apiEndpoint+"/order/listfood/"+this.userService.user[0].cid).subscribe((data:any)=>{
          this.carts = orderShowCvt.toOrderShow(JSON.stringify(data));
          console.log(this.carts);
           this.carts.forEach(element => {


          this.amoutsSet.add(element.amount);
        });
        this.amounts = Array.from(this.amoutsSet);
        });

    });
    }


  }
  delete(food:OrderShow){
    if(confirm("ยืนยันการลบข้อมูล?")){


      this.http.delete(this.dataService.apiEndpoint+'/orderamount/'+food.orderid+"/"+food.foodid).subscribe((res)=>{
        console.log(res);
        if(res==true){
          this.total -= food.price*food.amount
          let jsonobj={
        total:this.total
      }
      let jsonString = JSON.stringify(jsonobj);
          console.log(res);
          this.http.get(this.userService.apiEndpoint+"/order/listfood/"+this.userService.user[0].cid).subscribe((data:any)=>{
          this.carts = orderShowCvt.toOrderShow(JSON.stringify(data));
          console.log(this.carts);
          this.carts.forEach(element => {
            this.amoutsSet.add(element.amount);
          });

        this.amounts = Array.from(this.amoutsSet);
        });
        }

    });
    }
  }
}
