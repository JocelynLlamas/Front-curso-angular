import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lo que sea';

  duplicarNumero(valor: number):number{
    return valor*2;
  }
}
