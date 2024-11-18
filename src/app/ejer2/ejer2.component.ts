import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejer2',
  standalone: true,
  imports: [FormsModule, CommonModule] , 
  templateUrl: './ejer2.component.html',
  styleUrls: ['./ejer2.component.css']
})
export class Ejer2Component {
  numero1: number = 0;
  numero2: number = 0;
  numero3: number = 0;
  numero4: number = 0;
  mayor: number | null = null;

  calcularMayor(): void {
    // Lógica para calcular el número mayor
    this.mayor = Math.max(this.numero1, this.numero2, this.numero3, this.numero4);
  }
}
