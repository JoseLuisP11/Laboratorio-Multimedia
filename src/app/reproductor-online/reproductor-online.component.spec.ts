import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorOnlineComponent } from './reproductor-online.component';

describe('ReproductorOnlineComponent', () => {
  let component: ReproductorOnlineComponent;
  let fixture: ComponentFixture<ReproductorOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproductorOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductorOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
