import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditComponent } from './Components/edit/edit.component';

const routes: Routes = [
  {path:"", redirectTo:"add-user", pathMatch:"full"},
  {path:"view",component:ViewUserComponent},
  {path:"add-user",component:AddUserComponent},
  {path:"edit/:_id",component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
