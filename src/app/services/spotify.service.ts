import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Esta etiqueta lo que nos está diciendo es que vamos a ser capaces de injectar el servicio en otros componentes

@Injectable({
  // Esto lo que hace es ahorrarnos añadir el servicio en app.modules providers como haciamos con los componentes, etc.
  providedIn: 'root',
})
export class SpotifyService {

  constructor(private http: HttpClient) {}
  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBjo_VPby9ApjWXE1lvqjVyHi8_mknnq5TdXVzqgPKl8ILqh9E0unGM5LlOERzmkGF6fhuxUMwe9uCvzq2n2zNpvmca8kHsSWok4-MepvGH2zZhdqZ7b8payGreme7mR5b31XjSp2mjm58'
    });

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases?country=ES&limit=20', {headers})
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
