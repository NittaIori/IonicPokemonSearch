import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Storage } from '@ionic/storage-angular'; // ここを記述

import { AplistorageProvider } from './providers/aplistorage'; // ここを記述
import { ApiProvider } from './providers/api'; // ここを記述

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Storage, // ここに入れる
    AplistorageProvider, // ここに入れる
    ApiProvider, // ここに入れる
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
