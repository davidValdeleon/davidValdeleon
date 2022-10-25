import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  title = 'lista.invitados';

  imgInvitacion = '../assets/imagenbienvenida.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  asistir() {
    alert('Gracias por aceptar la invitación')
  }

  noAsistir() {
    alert('Que lastima que no vayas')
  }

}
