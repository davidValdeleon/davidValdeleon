import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  title = 'initium_tienda_de_cafe';

  logo = '../assets/Logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
