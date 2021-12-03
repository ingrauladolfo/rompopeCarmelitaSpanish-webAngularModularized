import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionSlideComponent } from './presentacion-slide.component';

describe('PresentacionSlideComponent', () => {
  let component: PresentacionSlideComponent;
  let fixture: ComponentFixture<PresentacionSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
