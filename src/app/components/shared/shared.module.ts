import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa/empresa.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BtnWtsComponent } from './btn-wts/btn-wts.component';



@NgModule({
  declarations: [
    EmpresaComponent,
    TrabajoComponent,
    ServicioComponent,
    BtnWtsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmpresaComponent,
    TrabajoComponent,
    ServicioComponent,
    BtnWtsComponent
  ]
})
export class SharedModule { }
