import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserServices } from './services/user.services';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule } from '@angular/forms';
import { Loger } from './services/logservice';
import { UserdetailsComponent } from './userdetails/userdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CreateuserComponent,
    UserdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
