import { Component } from '@angular/core';
import { IArtistas } from '../interfaces/IArtistas';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {
artista: IArtistas={
  seccion: 'Artistas',
  nombre: 'Kendrick Lamar',
  nacionalidad: 'Estadounidense',
  nacimiento: '17 de junio de 1987',
  edad: 35
}
}
