import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-orden',
  templateUrl: './mi-orden.component.html',
  styleUrls: ['./mi-orden.component.scss']
})
export class MiOrdenComponent implements OnInit {

  producto = '../../assets/cafe340gr.png';
  logo = '../assets/Logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
