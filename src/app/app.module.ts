import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';


@NgModule({
  imports:      [ BrowserModule,
                  routing
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ProfileComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders ]
})
export class AppModule { }
