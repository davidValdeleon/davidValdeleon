import { Component, OnInit } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  title = 'initium_tienda_de_cafe';

  logo = '../assets/Logo.png';

  constructor() { }

  ngOnInit(): void {
  }
}

