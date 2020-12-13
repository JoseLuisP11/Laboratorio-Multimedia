import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoInteractivoComponent } from './video-interactivo/video-interactivo.component';
import { ReproductorOnlineComponent } from './reproductor-online/reproductor-online.component';
import { FuncionalidadAvanzadaComponent } from './funcionalidad-avanzada/funcionalidad-avanzada.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: VideoInteractivoComponent },
  { path: 'reproductorOnline', component: ReproductorOnlineComponent },
  { path: 'ahorcado', component: FuncionalidadAvanzadaComponent },
  { path: '**', component: VideoInteractivoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
