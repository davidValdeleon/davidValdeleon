import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  imgMenu = '../../assets/iconos/menu.png';

  logo = '../assets/Logo.png';

  shoppingCart = '../../assets/iconos/shopping-cart.png'

  constructor() { }

  ngOnInit(): void {
  }

}
