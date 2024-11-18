import { Routes } from '@angular/router';
import { Ejer1Component } from './ejer1/ejer1.component';
import { Ejer2Component } from './ejer2/ejer2.component';
import { Ejer3Component } from './ejer3/ejer3.component';
import { Ejer4Component } from './ejer4/ejer4.component';

export const routes: Routes = [
  { path: 'ejer1', component: Ejer1Component }, // Ruta para Ejer1
  { path: 'ejer2', component: Ejer2Component }, // Ruta para Ejer2
  { path: 'ejer3', component: Ejer3Component }, // Ruta para Ejer3
  { path: 'ejer4', component: Ejer4Component }, // Ruta para Ejer4  
];
