import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Ejer2Component } from './ejer2.component';

describe('Ejer2Component', () => {
  let component: Ejer2Component;
  let fixture: ComponentFixture<Ejer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ejer2Component],
      imports: [FormsModule]  // Asegúrate de que FormsModule esté importado para usar ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(Ejer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the largest number correctly', () => {
    component.numero1 = 10;
    component.numero2 = 20;
    component.numero3 = 5;
    component.numero4 = 15;
    component.calcularMayor();
    expect(component.mayor).toBe(20);
  });

  it('should return null if no numbers are entered', () => {
    component.numero1 = 0;
    component.numero2 = 0;
    component.numero3 = 0;
    component.numero4 = 0;
    component.calcularMayor();
    expect(component.mayor).toBe(0);
  });
});
