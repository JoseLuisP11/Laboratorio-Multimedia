import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadAvanzadaComponent } from './funcionalidad-avanzada.component';

describe('FuncionalidadAvanzadaComponent', () => {
  let component: FuncionalidadAvanzadaComponent;
  let fixture: ComponentFixture<FuncionalidadAvanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalidadAvanzadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
