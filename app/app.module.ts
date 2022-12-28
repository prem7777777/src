import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AduserComponent } from './aduser/aduser.component';
import { AdmenuComponent } from './admenu/admenu.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitServiceService } from './Services/fruit-service.service';
import { BiscuitsComponent } from './biscuits/biscuits.component';
import { BiscuitService } from './Services/biscuit.service';
import { VegetableComponent } from './vegetable/vegetable.component';
import { VegetableService } from './Services/vegetable.service';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { GetService } from './Services/get.service';
import { ShopLoginComponent } from './shop-login/shop-login.component';
import { ShopRegisterComponent } from './shop-register/shop-register.component';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { ShopFunComponent } from './shop-fun/shop-fun.component';
import { MyorderComponent } from './myorder/myorder.component';
import { FruitFormComponent } from './fruit-form/fruit-form.component';
import { VegFormComponent } from './veg-form/veg-form.component';
import { BiscuitFormComponent } from './biscuit-form/biscuit-form.component';
import { ColddrinksFormComponent } from './colddrinks-form/colddrinks-form.component';
import { CODPaymentComponent } from './cod-payment/cod-payment.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    OrderComponent,
    PaymentComponent,
    AdloginComponent,
    DashboardComponent,
    AduserComponent,
    AdmenuComponent,
    FruitsComponent,
    BiscuitsComponent,
    VegetableComponent,
    ColddrinksComponent,
    ShopLoginComponent,
    ShopRegisterComponent,
    ShopDashboardComponent,
    ShopFunComponent,
    MyorderComponent,
    FruitFormComponent,
    VegFormComponent,
    BiscuitFormComponent,
    ColddrinksFormComponent,
    CODPaymentComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
    // FormsModule,
    // ReactiveFormsModule,
    // FormBuilder,
    // FormGroup


  ],
  providers: [
    SharedService, 
    FruitServiceService,
    BiscuitService,
    GetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
