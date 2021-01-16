import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginPageComponent} from './components/user-pages/login-page/login-page.component';
import {ProfilePageComponent} from './components/user-pages/profile-page/profile-page.component';
import {FlatsPageComponent} from './components/user-pages/flats-page/flats-page.component'
import {AssignmentsPageComponent} from './components/user-pages/assignments-page/assignments-page.component'
import {ShoppingPageComponent} from './components/user-pages/shopping-page/shopping-page.component'
import {RankingPageComponent} from './components/user-pages/ranking-page/ranking-page.component'
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {BillingsPageComponent} from './components/user-pages/billings-page/billings-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'flats', component: FlatsPageComponent},
  { path: 'assignments', component: AssignmentsPageComponent},
  { path: 'shopping', component: ShoppingPageComponent},
  { path: 'billings', component: BillingsPageComponent},
  { path: 'ranking', component: RankingPageComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
