import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {

  title = 'initium_tienda_de_cafe';

  logo = '../assets/Logo.png'


  constructor() { }

  ngOnInit(): void {
  }

}
