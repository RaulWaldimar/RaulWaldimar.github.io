import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Cabeza } from './cabeza';

describe('Cabeza', () => {
  let component: Cabeza;
  let fixture: ComponentFixture<Cabeza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabeza, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabeza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
