import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodDeliverComponent } from './page/food-deliver/food-deliver.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './page/main/main.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {MatCardModule} from '@angular/material/card';
import { ShopComponent } from './page/shop/shop.component';
import { TypeComponent } from './page/type/type.component';
import { RouterModule } from '@angular/router';
import {Routes}from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderownerComponent } from './component/headerowner/headerowner.component';
import { CartfoodComponent } from './page/cartfood/cartfood.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { DialogComponent } from './page/dialog/dialog.component';
import { DialogproceedComponent } from './page/dialogproceed/dialogproceed.component';
import { FirstloginComponent } from './page/firstlogin/firstlogin.component';
import { FirstpageComponent } from './page/firstpage/firstpage.component';
import { FooddetailComponent } from './page/fooddetail/fooddetail.component';
import { InformationforcustoComponent } from './page/informationforcusto/informationforcusto.component';
import { InsertComponent } from './page/insert/insert.component';
import { InsertfoodComponent } from './page/insertfood/insertfood.component';
import { ListFoodComponent } from './page/list-food/list-food.component';
import { LoginownerComponent } from './page/loginowner/loginowner.component';
import { MainownerComponent } from './page/mainowner/mainowner.component';
import { NotificatiionsComponent } from './page/notificatiions/notificatiions.component';
import { OrderComponent } from './page/order/order.component';
import { SignupownerComponent } from './page/signupowner/signupowner.component';


import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatedfoodComponent } from './page/updatedfood/updatedfood.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import {MatBadgeModule} from '@angular/material/badge';
import { ProfileComponent } from './page/profile/profile.component';
import { ProfileownerComponent } from './page/profileowner/profileowner.component';




const appRoutes: Routes =[
  {path : '',component: FoodDeliverComponent},
  {path : 'shop',component: ShopComponent},
  {path : 'type',component: TypeComponent},
  {path : 'login',component: LoginComponent},
  {path : 'signup',component: SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FoodDeliverComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ShopComponent,
    TypeComponent,
    LoginComponent,
    SignupComponent,
    HeaderownerComponent,
    CartfoodComponent,
    CheckoutComponent,
    DialogComponent,
    DialogproceedComponent,
    FirstloginComponent,
    FirstpageComponent,
    FooddetailComponent,
    InformationforcustoComponent,
    InsertComponent,
    InsertfoodComponent,
    ListFoodComponent,
    LoginownerComponent,
    MainownerComponent,
    NotificatiionsComponent,
    OrderComponent,
    SignupownerComponent,
    UpdatedfoodComponent,
    ProfileComponent,
    ProfileownerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MdbCarouselModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatRadioModule,
    MatListModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MdbCarouselModule,
    MatRadioModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
