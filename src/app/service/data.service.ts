import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Convert as FoodCvt,Food  } from 'src/app/model/food.mode';
import { Convert as TypeFoodCvt,Typefood  } from 'src/app/model/type.mode';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiEndpoint = 'http://localhost:80/webapiproject';

  // public editCart:any ={cart:0,products:[],subTotal:0}
  // public subject = new Subject<any>();
  // private cartSourch = new BehaviorSubject(this.editCart);
  // currentCart =this.cartSourch.asObservable();

  // updatedCart(item:any){
  //   this.cartSourch.next(item);
  // }
  total:number=0;

  types : any;
  selectedFood:any;
  selectEditFood:any;
  itemCart:any;
  amount:any
  order:any
  id:any;
  cart:any;
  selectorder:any;

  chk : boolean=true;
  public productList = new BehaviorSubject<any>([]);

  constructor() {

   }

}


