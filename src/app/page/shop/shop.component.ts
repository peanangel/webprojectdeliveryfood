import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Convert as FoodCvt,Food  } from 'src/app/model/food.mode';
import { Convert as TypeFoodCvt,Typefood  } from 'src/app/model/type.mode';
import { DataService  } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as OrderamountCvt,Orderamount } from 'src/app/model/orderamount.mode';
import { Convert as OrderCvt,Order } from 'src/app/model/order.mode';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { elementAt, map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  foods = Array<Food>();
  types = Array<Typefood>();
  cartItem = Array<Food>();
  amount =Array<Orderamount>();
  order = Array<Order>();
  i: number=0;
  num :any;
  public productlist: any=[];
  cart = Array<Orderamount>();
  constructor(public dialog: MatDialog,private dataService : DataService ,private http: HttpClient
    ,private userService : UserService,private router:Router) {
      // this.dataService.amount =this.amount;
      // this.dataService.order = this.order;

      // this.dataService.itemCart = this.cart.length;

    http.get(dataService.apiEndpoint+"/food").subscribe((data:any)=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
    });
    http.get(dataService.apiEndpoint+"/typefood").subscribe((data:any)=>{
      this.types = TypeFoodCvt.toTypefood(JSON.stringify(data));
    });
  }

  findByType(type:string){
    console.log(type);
    this.http.get(this.dataService.apiEndpoint +"/food/type/"+type).subscribe(data=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
    });
  }
  findAll(){
    this.http.get(this.dataService.apiEndpoint+"/food").subscribe(data=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
    });
  }
  findByName(name:string){
    this.http.get(this.dataService.apiEndpoint+"/food/name/"+name).subscribe(data=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

// add to cart
  addToCart(food:Food){
    this.cartItem.push(food);
    console.log('addtocart');
    console.log("user:",this.userService.user[0].cid);
    //this customer have order status 3 (did not pay)? output = amouont row
    this.http.get(this.dataService.apiEndpoint+"/iorderCustomer/"+this.userService.user[0].cid).subscribe(data=>{
      // this.order = OrderCvt.toOrder(JSON.stringify(data));
      this.num  =JSON.stringify(data);
      console.log("this.num",this.num);
      if( this.num == 0){
        console.log('insert iorder')
        let jsonobj={
          cusid:this.userService.user[0].cid,
          note:'',
          address:'',
          status:3,
          amount:1,
          foodid:food.foodid,
        }
        let jsonString = JSON.stringify(jsonobj);
        this.http.post(this.dataService.apiEndpoint+"/order",jsonString,{observe:'response'}).subscribe((response)=>{
          console.log(JSON.stringify(response.status));
          console.log(JSON.stringify(response.body));
          alert('put in cart successfully');
        });
      }else{
        this.http.get(this.dataService.apiEndpoint+"/iorderamount/"+this.userService.user[0].cid).subscribe(data=>{
          this.cart = OrderamountCvt.toOrderamount(JSON.stringify(data));
          console.log(this.cart);

        console.log(this.cart);
        
        for(let index = 0; index<=this.cart.length;index++){
          if(this.cart[index].foodid != food.foodid){
              console.log("if");
              let jsonobj={
                cusid:this.userService.user[0].cid,
                foodid:food.foodid,
                amount:1,
              }
              let jsonString = JSON.stringify(jsonobj);
              this.http.post(this.dataService.apiEndpoint+"/orderamount",jsonString,{observe:'response'}).subscribe((response)=>{
                console.log(JSON.stringify(response.status));
                console.log(JSON.stringify(response.body));
                alert('put in cart successfully')
              });

            //  break;
                //insert orderamount
          }
          else{
              //update orderamount
            console.log("else");
            let jsonobj={
              cusid:this.userService.user[0].cid,
              foodid:food.foodid,
              amount:this.cart[index].amount+1
            }
            let jsonString = JSON.stringify(jsonobj);
            this.http.put(this.dataService.apiEndpoint+"/orderamount",jsonString,{observe:'response'}).subscribe((response)=>{
              console.log(JSON.stringify(response.status));
              console.log(JSON.stringify(response.body));
              if( JSON.stringify(response.body)=='true'){
                alert('Update cart successfully')
              }else{
                alert('cannot update')
                console.log('cannot update')
              }

            });
          }
        }
      });
      }

    });
    console.log("this.num2",this.num);

  }
}
