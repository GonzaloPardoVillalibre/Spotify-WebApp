import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  // Aquí es donde vamos a guardar la respuesta
  paises: any[] = [];

  // Al introducir el objeto http de tipo httpClient voy a poder hacer peticones http
  constructor( private http: HttpClient) {
    console.log('Constructor del home llamado');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (datosRecibidos: any) => {
      this.paises = datosRecibidos;
      console.log(datosRecibidos);
    });
  }

  ngOnInit(): void {
  }

}
