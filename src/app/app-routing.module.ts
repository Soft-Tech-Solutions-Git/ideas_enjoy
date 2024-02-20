import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { PergolasComponent } from './components/routes/pergolas/pergolas.component';
import { CerramientosComponent } from './components/routes/cerramientos/cerramientos.component';
import { HerrajesComponent } from './components/routes/herrajes/herrajes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pergolas',
    component: PergolasComponent
  },
  {
    path: 'cerramientos',
    component: CerramientosComponent
  },
  {
    path: 'herrajes',
    component: HerrajesComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
