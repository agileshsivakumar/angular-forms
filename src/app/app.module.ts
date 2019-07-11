import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from './alert/alert.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule, AppRoutingModule, AlertModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
