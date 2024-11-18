import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejer1',
  standalone: true,
  imports: [FormsModule, CommonModule] , 
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {
  salario: number = 0;
  tiempo: number = 0;
  utilidad: number | null = null;

  // Método para calcular la utilidad
  calcularUtilidad(): void {
    if (this.tiempo > 0) {
      this.utilidad = this.salario * (this.tiempo * 0.05); // 5% por cada año trabajado
    } else {
      this.utilidad = null; // Si el tiempo es inválido, no calculamos utilidad
    }
  }
}
