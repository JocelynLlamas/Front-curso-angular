import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      
    }, 1000);

  }

  title = 'lo que sea';

  peliculas;

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
