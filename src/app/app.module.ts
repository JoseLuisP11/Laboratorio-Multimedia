import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { FormsModule } from '@angular/forms';
import { VgStreamingModule } from "@videogular/ngx-videogular/streaming";

import { VideoInteractivoComponent } from './video-interactivo/video-interactivo.component';
import { ReproductorOnlineComponent } from './reproductor-online/reproductor-online.component';
import { FuncionalidadAvanzadaComponent } from './funcionalidad-avanzada/funcionalidad-avanzada.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideoInteractivoComponent,
    ReproductorOnlineComponent,
    FuncionalidadAvanzadaComponent,
    AhorcadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    VgStreamingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }