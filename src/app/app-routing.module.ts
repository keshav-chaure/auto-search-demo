import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './routing-demo/home/home.component';
import { CustomerComponent } from './routing-demo/customer/customer.component';
import { OrderComponent } from './routing-demo/order/order.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component:MainComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    //canLoad: [AuthGuard]
  },
  { path: 'route-demo', 
    component: HomeComponent,
    children:[
      {
      path:'customer',
      component:CustomerComponent
      },
      {
        path:'order',
        component:OrderComponent
      }
    ]
  }
  /*{ 
    path: 'route-demo', 
    loadChildren: () => import('./routing-demo/routing-demo.module').then(mod => mod.RoutingDemoModule) 
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
