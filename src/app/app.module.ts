import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './main/user-details/user-details.component';
import { UserAddressComponent } from './main/user-address/user-address.component';
import { CompanyDetailsComponent } from './main/company-details/company-details.component';
import { InternetAddressComponent } from './main/internet-address/internet-address.component';
import { FinanceComponent } from './main/finance/finance.component';
import { RouteRoutingModule } from './app-routing.module'
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { InputFieldComponent } from './component/input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { AddUserComponent } from './main/user-details/add-user/add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {UserServiceService} from './main/user-details/user-service.service'


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserAddressComponent,
    CompanyDetailsComponent,
    InternetAddressComponent,
    FinanceComponent,
    SidebarComponent,
    InputFieldComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouteRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
