import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {MatFormFieldModule, MatInputModule, MatAutocompleteModule,  MatProgressSpinnerModule} from '@angular/material';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import {AutoSearchUserService} from './service/auto-search-user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AutoSearchUserComponent } from './share/auto-search-user/auto-search-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { MsgSuperParentComponent } from './msg-super-parent/msg-super-parent.component';
import { RoutingDemoModule } from './routing-demo/routing-demo.module';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AutoSearchUserComponent,
    ParentComponent,
    ChildComponent,
    ParentOneComponent,
    ChildOneComponent,
    MsgSuperParentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RoutingDemoModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1000 }
      ),
  ],
  providers: [AutoSearchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
