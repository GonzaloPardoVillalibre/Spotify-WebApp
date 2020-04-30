import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error : boolean;
  errorMessage: any;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
   }

}
