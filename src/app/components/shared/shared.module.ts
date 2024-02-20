import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa/empresa.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { ServicioComponent } from './servicio/servicio.component';



@NgModule({
  declarations: [
    EmpresaComponent,
    TrabajoComponent,
    ServicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmpresaComponent,
    TrabajoComponent,
    ServicioComponent
  ]
})
export class SharedModule { }
