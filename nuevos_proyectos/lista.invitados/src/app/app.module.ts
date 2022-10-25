import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmadoComponent } from './confirmado/confirmado.component';
import { HomeComponent } from './home/home.component';
import { NoAsisteComponent } from './no-asiste/no-asiste.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'confirmado', component:ConfirmadoComponent},
  {path:'noAsiste', component:NoAsisteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmadoComponent,
    HomeComponent,
    NoAsisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
