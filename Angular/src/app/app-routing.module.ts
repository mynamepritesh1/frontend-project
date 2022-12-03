import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user/user-list.component'
import {RoomsComponent} from './rooms/rooms.component'
import {HeaderComponent} from './header/header.component'



const routes: Routes = [
  {
    path:'user',
    component: UserListComponent
  },
  {
    path:'rooms',
    component:RoomsComponent
  },
  {
    path:'**',
    component:HeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
