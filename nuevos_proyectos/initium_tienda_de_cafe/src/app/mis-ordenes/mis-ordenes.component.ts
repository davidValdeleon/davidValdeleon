import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.scss']
})
export class MisOrdenesComponent implements OnInit {

  producto = '../../assets/cafe340gr.png';
  logo = '../assets/Logo.png';
  arrowRight = '../../assets/iconos/right-arrow.png';

  constructor() { }

  ngOnInit(): void {
  }

}
