import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionForm } from './devolucion-form';

describe('DevolucionForm', () => {
  let component: DevolucionForm;
  let fixture: ComponentFixture<DevolucionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevolucionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
