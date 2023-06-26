import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { EditComponent } from './Components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUserComponent,
    AddUserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
