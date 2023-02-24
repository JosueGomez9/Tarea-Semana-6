import { Component } from '@angular/core';
import { IArtistas } from '../interfaces/IArtistas';
import { IMusica } from '../interfaces/IMusica';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {
  seccion="Artistas"
  artista: IArtistas[] = [
{
  nombre: 'Kendrick Lamar',
  nacionalidad: 'Estadounidense',
  nacimiento: '17 de junio de 1987',
  edad: 35
},
{
  nombre: 'Drake',
  nacionalidad: 'Canadiense',
  nacimiento: '24 de octubre de 1986',
  edad: 36
},

{
  nombre: '21 Savage',
  nacionalidad: 'Britanico',
  nacimiento: '22 de octubre de 1992',
  edad: 30
},
{
  nombre: 'Bad Bunny',
  nacionalidad: 'Puertorriqueño',
  nacimiento: '10 de marzo de 1994',
  edad: 28
}

  ] 
 
}

