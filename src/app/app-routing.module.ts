import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateComponent } from './pages/calculate/calculate.component';
import { CustomerComponent } from './pages/customer/customer.component';

const routes: Routes = [
  { path: 'calculate' , component: CalculateComponent},
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
