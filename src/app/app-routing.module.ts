import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartfoodComponent } from './page/cartfood/cartfood.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { FirstloginComponent } from './page/firstlogin/firstlogin.component';
import { FirstpageComponent } from './page/firstpage/firstpage.component';
import { FoodDeliverComponent } from './page/food-deliver/food-deliver.component';
import { FooddetailComponent } from './page/fooddetail/fooddetail.component';
import { InformationforcustoComponent } from './page/informationforcusto/informationforcusto.component';
import { InsertfoodComponent } from './page/insertfood/insertfood.component';
import { ListFoodComponent } from './page/list-food/list-food.component';
import { LoginComponent } from './page/login/login.component';
import { LoginownerComponent } from './page/loginowner/loginowner.component';
import { MainComponent } from './page/main/main.component';
import { MainownerComponent } from './page/mainowner/mainowner.component';
import { NotificatiionsComponent } from './page/notificatiions/notificatiions.component';
import { OrderComponent } from './page/order/order.component';
import { ShopComponent } from './page/shop/shop.component';
import { SignupComponent } from './page/signup/signup.component';
import { SignupownerComponent } from './page/signupowner/signupowner.component';
import { TypeComponent } from './page/type/type.component';
import { UpdatedfoodComponent } from './page/updatedfood/updatedfood.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ProfileownerComponent } from './page/profileowner/profileowner.component';

const routes: Routes = [
  {path : 'owner', component : LoginownerComponent},
  {path : 'logout', component : LoginownerComponent},
  {path : 'signupowner', component : SignupownerComponent},
  {path : 'mainowner' , component : MainownerComponent, children: [
    {path : 'order' , component : OrderComponent, outlet : 'shopowneroutlet'},
    {path : 'informationcusto', component : InformationforcustoComponent, outlet: 'shopowneroutlet'},
    {path : 'insertfood', component : InsertfoodComponent, outlet: 'shopowneroutlet'},
    {path : 'listfood', component : ListFoodComponent, outlet: 'shopowneroutlet'},
    {path : 'updatedfood', component : UpdatedfoodComponent, outlet: 'shopowneroutlet'},
    {path : 'information', component : InformationforcustoComponent, outlet: 'shopowneroutlet'},
    {path : 'profile', component : ProfileownerComponent, outlet: 'shopowneroutlet'},
  ]},

  {path : '', component : FirstloginComponent},
  {path : 'customer', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'checkout', component : CheckoutComponent},
  {path: 'firstpage', component : FirstpageComponent, children: [
    {path : 'main', component : MainComponent, outlet : 'shopoutlet'},
    {path : 'shop', component : ShopComponent, outlet : 'shopoutlet'},
    {path : 'fooddetail', component : FooddetailComponent, outlet : 'shopoutlet'},
    {path : 'cartfood', component : CartfoodComponent, outlet : 'shopoutlet'},
    // {path : 'checkout', component : CheckoutComponent, outlet : 'shopoutlet'},
    {path : 'type', component : TypeComponent, outlet : 'shopoutlet'},
    {path : 'notifications', component : NotificatiionsComponent, outlet : 'shopoutlet'},
    {path : 'information', component : InformationforcustoComponent, outlet: 'shopoutlet'},
    {path : 'profile', component : ProfileComponent, outlet: 'shopoutlet'}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
