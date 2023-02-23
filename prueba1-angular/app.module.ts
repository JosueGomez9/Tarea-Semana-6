import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { DiscosComponent } from './discos/discos.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    ArtistasComponent,
    DiscosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
