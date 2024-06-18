import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  peliculas;

  ngOnInit(): void {
    this.peliculas = [
      {
        titulo: 'Spider-Man - Far From Home',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99
      },
      {
        titulo: 'Mean guuuurls',
        fechaLanzamiento: new Date('2004-06-26'),
        precio: 5000.50
      },
    ];
  }

}
