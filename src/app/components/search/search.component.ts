import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  loading: boolean;
  nuevosArtistas: any[] = [];
  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    if (termino.length === 0) {
      return null;
    }
    this.loading = true;
    console.log(termino);
    this.spotify.getArtist(termino).subscribe((data: any) => {
      this.nuevosArtistas = data;
      this.loading = false;
    });
  }
}
