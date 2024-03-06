import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa/empresa.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BtnWtsComponent } from './btn-wts/btn-wts.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    EmpresaComponent,
    TrabajoComponent,
    ServicioComponent,
    BtnWtsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [
    EmpresaComponent,
    TrabajoComponent,
    ServicioComponent,
    BtnWtsComponent
  ]
})
export class SharedModule { }
