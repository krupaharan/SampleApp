import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home' , component: HomeComponent },
//   { path: 'test' , component: TestComponent },
//   { path: 'navbar' , component: NavbarComponent }
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
