import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  title = 'initium_tienda_de_cafe';

  logo = '../assets/Logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
