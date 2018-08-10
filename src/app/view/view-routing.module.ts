import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../_guards';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: 'dashboard',
    component: ViewComponent,
    canActivate: [AuthGuard],
     children: [
       { path: '', component: DashboardComponent }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
