//nie podłączone
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YourOrderComponent } from './order/your-order/your-order.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'yourorder', component: YourOrderComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    YourOrderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
