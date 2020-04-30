import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = {};
  topTracks: any = {};

  constructor(
    private aRouter: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.aRouter.params.subscribe((params: any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
      this.loading = false;
    });
  }

  getArtista(id: string) {
    this.spotify.getArtist(id).subscribe((data: any) => {
      this.artista = data;
      console.log(this.artista);
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks: any) => {
      this.topTracks = topTracks;
      console.log(this.topTracks);
    });
  }
}
