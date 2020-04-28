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
      Authorization: 'Bearer BQCtHb1iUH7qFG2Hig_s_pE4jSOrLKNdsy-SCK5Svo5NhW-MYnE2bKLI2QCG8wIAVz7o53qDqJ4vLA45-yU'
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?country=ES&limit=20', {headers});
  }

  getArtist(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCtHb1iUH7qFG2Hig_s_pE4jSOrLKNdsy-SCK5Svo5NhW-MYnE2bKLI2QCG8wIAVz7o53qDqJ4vLA45-yU'
    });

    return this.http
      .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers});
  }
}
