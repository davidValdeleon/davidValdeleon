import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { MobileMenuDesplegableComponent } from './mobile-menu-desplegable/mobile-menu-desplegable.component';
import { MiOrdenComponent } from './mi-orden/mi-orden.component';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetalleDelProductoComponent } from './detalle-del-producto/detalle-del-producto.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';

const appRoutes: Routes=[

  {path:'', component:HomeComponent},
  {path:'emailconfirmation', component:EmailConfirmationComponent},
  {path:'login', component:LoginComponent},
  {path:'myaccount', component:MyAccountComponent},
  {path:'editaccount', component:EditaccountComponent},
  {path:'resetPassword', component:ResetPasswordComponent},
  {path: 'menudesplegable', component:MenuDesplegableComponent},
  {path: 'mobilemenudesplegable', component:MobileMenuDesplegableComponent},
  {path: 'miorden', component:MiOrdenComponent},
  {path: 'misordenes', component:MisOrdenesComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'detalledelproducto', component:DetalleDelProductoComponent},
  {path: 'carritodecompras', component:CarritoDeComprasComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmailConfirmationComponent,
    HomeComponent,
    LoginComponent,
    MyAccountComponent,
    EditaccountComponent,
    ResetPasswordComponent,
    MenuDesplegableComponent,
    MobileMenuDesplegableComponent,
    MiOrdenComponent,
    MisOrdenesComponent,
    NavbarComponent,
    DetalleDelProductoComponent,
    CarritoDeComprasComponent
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
