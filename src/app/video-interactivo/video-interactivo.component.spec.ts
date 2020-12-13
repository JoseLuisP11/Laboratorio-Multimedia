import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInteractivoComponent } from './video-interactivo.component';

describe('VideoInteractivoComponent', () => {
  let component: VideoInteractivoComponent;
  let fixture: ComponentFixture<VideoInteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoInteractivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
