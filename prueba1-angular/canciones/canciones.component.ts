import { Component } from '@angular/core';
import { IMusica } from '../interfaces/IMusica';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {
  link=""
  seccion ="Canciones"
  musica:IMusica [] =
  [
  {
    artist:"Kendrick Lamar",
    title: "Money Trees",
    genero: 'Rap',
    album: ' MAAD City (2012)',
    duration: 6.26,
    link: "https://www.youtube.com/watch?v=smqhSl0u_sI"
  },
  {
    artist:"Kendrick Lamar",
    title: "Swimming Pools(Drank)",
    genero: 'Rap',
    album: ' MAAD City (2012)',
    duration: 5.13,
    link: "https://www.youtube.com/watch?v=_EOwEHN0rr8"
  },
  {
    artist:"Kendrick Lamar",
    title: "Backseat Freestyle",
    genero: 'Rap',
    album: ' MAAD City (2012)',
    duration: 3.32,
    link: "https://www.youtube.com/watch?v=KNVdfiAfiIs"
  },
  {
    artist:"Kendrick Lamar",
    title: "Count Me Out",
    genero: 'Rap',
    album: 'Mr.Morales & The Big Steppers',
    duration: 4.43,
    link: "https://www.youtube.com/watch?v=6nTcdw7bVdc"
  },
  {
    artist:"Drake",
    title: "Hotline Bling",
    genero: 'Rap',
    album: ' Views',
    duration: 4.27,
    link: "https://www.youtube.com/watch?v=LxxnSDmGUc4"
  },
  {
    artist:"Drake",
    title: "Gods Plan",
    genero: 'Rap',
    album: ' Scorpion',
    duration: 3.18,
    link: "https://www.youtube.com/watch?v=m1a_GqJf02M"
  },
  {
    artist:"Drake",
    title: "Nonstop",
    genero: 'Rap',
    album: ' Scorpion',
    duration: 3.58,
    link: "https://www.youtube.com/watch?v=QVqS3tB8OtE"
  },
  {
    artist:"Drake",
    title: "Spin Bout U",
    genero: 'Rap',
    album: ' Her Loss',
    duration: 3.34,
    link: "https://www.youtube.com/watch?v=jALeORvCJG8"
  },
  {
    artist:"21 Savage",
    title: "Runnin",
    genero: 'Rap',
    album: ' Savage Mode II',
    duration: 3.15,
    link: "https://www.youtube.com/watch?v=ZZ6VhTBcc-c"
  },
  {
    artist:"21 Savage",
    title: "Glock in my lap",
    genero: 'Rap',
    album: ' Savage Mode II',
    duration: 3.13,
    link: "https://www.youtube.com/watch?v=IShUzOqBqOk"
  },
  {
    artist:"21 Savage",
    title: "A lot",
    genero: 'Rap',
    album: ' i am> i was',
    duration: 4.48,
    link: "https://www.youtube.com/watch?v=VbrEsOLu75c"
  },
  {
    artist:"21 Savage",
    title: "ball w/o you",
    genero: 'Rap',
    album: ' i am> i was',
    duration: 3.15,
    link: "https://www.youtube.com/watch?v=G68rIXiy0Bo"
  },
  {
    artist:"Bad Bunny",
    title: "Haciendo que me amas",
    genero: 'trap',
    album: ' El ultimo tour del mundo',
    duration: 3.37,
    link: "https://www.youtube.com/watch?v=xG9wDttvua8"
  },
  {
    artist:"Bad Bunny",
    title: "Si veo a tu mama",
    genero: 'Trap',
    album: 'YHLQMDLG',
    duration: 2.50,
    link: "https://www.youtube.com/watch?v=U03nHWOSr94"
  },
  {
    artist:"Bad Bunny",
    title: "Si estuviesemos juntos",
    genero: 'Regueton',
    album: ' X100PRE',
    duration: 2.49,
    link: "https://www.youtube.com/watch?v=r8OPcBFATtU"
  },
  {
    artist:"Bad Bunny",
    title: "La Santa ft Daddy Yankee",
    genero: 'Regueton',
    album: 'YHLQMDLG',
    duration: 3.26,
    link: "https://www.youtube.com/watch?v=G68rIXiy0Bo"
  }
]
Link: any;
}

