import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
        {
          titulo: 'Spider-Man',
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
    }, 1000);

  }

  title = 'lo que sea';

  peliculas;

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
