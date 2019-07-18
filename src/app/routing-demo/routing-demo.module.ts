import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { RoutingDemoRoutingModule } from './routing-demo-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent, 
    NavBarComponent, 
    FooterComponent, CustomerComponent, OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutingDemoRoutingModule
  ]
})
export class RoutingDemoModule { }
