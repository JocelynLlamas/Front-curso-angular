import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lo que sea';

  pelicula={
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date()
  }
  duplicarNumero(valor: number):number{
    return valor*2;
  }
}
