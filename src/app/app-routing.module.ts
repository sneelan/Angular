import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/router/home/home.component';
import { Product1Component } from './components/pages/router/product1/product1.component';
import { UsersComponent } from './components/pages/router/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: Product1Component },
  { path: 'myusers', component: UsersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
