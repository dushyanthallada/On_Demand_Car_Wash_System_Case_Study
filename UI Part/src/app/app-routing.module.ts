import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CarwasherDashboardComponent } from './carwasher-dashboard/carwasher-dashboard.component';
import { CarwasherRegistartionComponent } from './carwasher-registartion/carwasher-registartion.component';
import { CarwashersComponent } from './carwashers/carwashers.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterNowComponent } from './register-now/register-now.component';

const routes: Routes = [ {path:'',redirectTo:'home',pathMatch:'full'}
,{path: 'about',component: AboutComponent}
,{path:'home',component: HomeComponent}
,{path:'navbar',component:NavbarComponent},
{path:'register-now',component:RegisterNowComponent},
{path:'customerregistration',component:CustomerRegistrationComponent},
{path:'carwasherregistration',component:CarwasherRegistartionComponent},
{path:'customer-dashboard',component:CustomerDashboardComponent},
{path:'admin-dashboard',component:AdminDashboardComponent},
{path:'carwasher-dashboard',component:CarwasherDashboardComponent},
{path: 'login', component: LoginComponent},
{path:'menu',component:MenuComponent},
{path:'home/menu',component:LoginComponent},
{path: 'menu/:id',component: MenupageComponent},
{path:'carwashers/menu',component:MenuComponent},
{path:'carwashers',component:CarwashersComponent},
{path:'admin-dashboard/carwashers',component:CarwashersComponent},
// {path:'login/menu',component:MenuComponent},
{ path: '**', component: NotFoundComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
