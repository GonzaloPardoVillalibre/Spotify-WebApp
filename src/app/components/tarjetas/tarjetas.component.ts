import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent{
  @Input() items: any[] = [];
  constructor(private router: Router) { }
  // No debemos olvidar que el JSON de las dos peticiones que estamos evaluando es difernete. Por tanto para coger
  // el id del artista que queremos mostrar debemos diferenciar si es una lista de albumnes (home) o de artistas (search).
  verArtista(item: any){
    // console.log(item);
    let artistaId;

    if (item.type === 'artist' ){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }
    // console.log(artistaId);
    // Redireccionamos pasando parámetro por
    this.router.navigate(['artist', artistaId]);
  }
}
