import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaEdicaoComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: MotoristaEdicaoComponent;
  let fixture: ComponentFixture<MotoristaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoristaEdicaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotoristaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
