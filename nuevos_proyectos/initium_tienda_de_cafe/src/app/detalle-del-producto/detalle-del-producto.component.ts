import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-del-producto',
  templateUrl: './detalle-del-producto.component.html',
  styleUrls: ['./detalle-del-producto.component.scss']
})
export class DetalleDelProductoComponent implements OnInit {

  producto = '../../assets/cafe340gr.png';
  logo = '../assets/Logo.png';
  arrowRight = '../../assets/iconos/right-arrow.png';
  close = '../../assets/iconos/cancel.png';
  shoppingCart = '../../assets/iconos/shopping-cart.png'
  constructor() { }

  ngOnInit(): void {
  }

}
