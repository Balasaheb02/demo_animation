import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './main/user-details/user-details.component';
import { UserAddressComponent } from './main/user-address/user-address.component';
import { CompanyDetailsComponent } from './main/company-details/company-details.component';
import { InternetAddressComponent } from './main/internet-address/internet-address.component';
import { FinanceComponent } from './main/finance/finance.component';

const routes: Routes = [
    {
        path: 'user-details',
        component: UserDetailsComponent
    },
    {
        path: 'user-address',
        component: UserAddressComponent
    },

    {
        path: 'company',
        component: CompanyDetailsComponent
    },

    {
        path: 'internet',
        component: InternetAddressComponent
    },

    {
        path: 'finance',
        component: FinanceComponent
    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
