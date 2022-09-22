import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticleComponent } from './arcticle.component';

describe('ArcticleComponent', () => {
  let component: ArcticleComponent;
  let fixture: ComponentFixture<ArcticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
