import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejer4Component } from './ejer4.component';

describe('Ejer4Component', () => {
  let component: Ejer4Component;
  let fixture: ComponentFixture<Ejer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer4Component], // Importa el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(Ejer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize resultados as an empty array', () => {
    expect(component.resultados).toEqual([]);
  });

  it('should populate resultados with correct data when calcular() is called', () => {
    component.calcular();
    expect(component.resultados.length).toBe(56); // Números de 15 a 70

    const firstResult = component.resultados[0];
    expect(firstResult).toEqual({ numero: 15, cuadrado: 225, mitad: 7.5 });

    const lastResult = component.resultados[55];
    expect(lastResult).toEqual({ numero: 70, cuadrado: 4900, mitad: 35 });
  });

  it('should render the results in the table when calcular() is called', () => {
    component.calcular();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('table tbody tr');
    expect(rows.length).toBe(56); // Verifica que hay 56 filas en la tabla
    expect(rows[0].textContent).toContain('15');
    expect(rows[0].textContent).toContain('225');
    expect(rows[0].textContent).toContain('7.5');
  });
});
