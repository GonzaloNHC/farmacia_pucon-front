import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirEtiquetas } from './imprimir-etiquetas';

describe('ImprimirEtiquetas', () => {
  let component: ImprimirEtiquetas;
  let fixture: ComponentFixture<ImprimirEtiquetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprimirEtiquetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprimirEtiquetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
