import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SobreMi } from './sobre-mi';

describe('SobreMi', () => {
  let component: SobreMi;
  let fixture: ComponentFixture<SobreMi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMi, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
