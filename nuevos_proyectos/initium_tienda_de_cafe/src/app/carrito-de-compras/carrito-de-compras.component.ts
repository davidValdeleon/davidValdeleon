import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.scss']
})
export class CarritoDeComprasComponent implements OnInit {

  producto = '../../assets/cafe340gr.png';
  logo = '../assets/Logo.png';
  arrowRight = '../../assets/iconos/right-arrow.png';
  close = '../../assets/iconos/cancel.png';
  shoppingCart = '../../assets/iconos/shopping-cart.png';


  constructor() { }

  ngOnInit(): void {
  }

}
