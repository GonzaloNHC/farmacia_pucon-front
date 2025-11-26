import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIngreso } from './crear-ingreso';

describe('CrearIngreso', () => {
  let component: CrearIngreso;
  let fixture: ComponentFixture<CrearIngreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearIngreso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearIngreso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
