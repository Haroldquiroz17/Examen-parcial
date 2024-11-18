import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejer3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  numeroMaterias: number | null = null; // Número de materias
  costoTotal: number | null = null; // Costo total de la matrícula

  // Cálculo de matrícula
  calcularMatricula() {
    const costoPorMateria = 520; // Costo por cada materia

    if (this.numeroMaterias !== null) {
      let total = costoPorMateria * this.numeroMaterias;

      // Aplicar descuento si hay más de 5 materias
      if (this.numeroMaterias > 5) {
        total *= 0.9; // Descuento del 10%
      }

      this.costoTotal = total; // Almacenar el costo final
    }
  }
}
