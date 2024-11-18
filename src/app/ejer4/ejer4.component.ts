import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejer4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejer4.component.html',
  styleUrls: ['./ejer4.component.css']
})
export class Ejer4Component {
  resultados: { numero: number; cuadrado: number; mitad: number }[] = [];

  calcular() {
    this.resultados = [];
    for (let i = 15; i <= 70; i++) {
      this.resultados.push({
        numero: i,
        cuadrado: i * i,
        mitad: i / 2,
      });
    }
  }
}
