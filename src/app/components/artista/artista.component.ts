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
  error: boolean;
  errorMessage: string;
  constructor(
    private aRouter: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.error =false;
    this.loading = true;
    this.aRouter.params.subscribe((params: any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
      this.loading = false;
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
  }

  getArtista(id: string) {
    this.spotify.getArtist(id).subscribe((data: any) => {
      this.artista = data;
      console.log(this.artista);
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks: any) => {
      this.topTracks = topTracks;
      console.log(this.topTracks);
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
  }
}
