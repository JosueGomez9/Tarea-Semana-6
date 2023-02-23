import { Component } from '@angular/core';
import { IMusica } from '../interfaces/IMusica';
import { IEnlace } from '../interfaces/IEnlaces';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {

  musica:IMusica={
    seccion: "Canciones" ,
    title: "Money Trees",
    description: 'es una canción del rapero estadounidense Kendrick Lamar, extraída de su álbum de estudio debut con un sello importante Good Kid',
    album: ' MAAD City (2012)',
    duration: 6.26,
    
  }
  link: IEnlace  ={
    link: "https://www.youtube.com/watch?v=smqhSl0u_sI",
    }
}
