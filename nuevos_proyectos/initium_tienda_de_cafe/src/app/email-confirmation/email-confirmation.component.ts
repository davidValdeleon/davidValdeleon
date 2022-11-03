import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {

  title = 'initium_tienda_de_cafe';

  logo = '../assets/Logo.png'
  emailIcon = '../assets/iconos/email.png'

  constructor() { }

  ngOnInit(): void {
  }

}
