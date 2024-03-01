import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PergolasComponent } from './pergolas/pergolas.component';
import { CerramientosComponent } from './cerramientos/cerramientos.component';
import { HerrajesComponent } from './herrajes/herrajes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    PergolasComponent,
    CerramientosComponent,
    HerrajesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    PergolasComponent,
    CerramientosComponent,
    HerrajesComponent
  ]
})
export class RoutesModule { }
