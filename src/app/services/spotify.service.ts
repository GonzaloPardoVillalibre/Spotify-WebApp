import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
// Esta etiqueta lo que nos está diciendo es que vamos a ser capaces de injectar el servicio en otros componentes

@Injectable({
  // Esto lo que hace es ahorrarnos añadir el servicio en app.modules providers como haciamos con los componentes, etc.
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBOxYDtN05lDAuLNEokgGE8xNLsyYxqdo1ErlPkdlwUAT2PsYMEfflfl_u5BJCJsKwPyrvGKsRogh2OnqU'
    });

    return this.http.get(url, {headers});

  }

  // Funcion para coger la lista de nuevos exitos
  getNewReleases() {
    return this.getQuery('browse/new-releases?country=ES&limit=20')
      .pipe(map(data => data['albums'].items));
  }

  // Funcion para coger la lista de artistas buscados mediante una cadena "termino" que tipicamente vendrá del search
  getArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }
}
