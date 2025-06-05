import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEdicaoComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: EmpresaEdicaoComponent;
  let fixture: ComponentFixture<EmpresaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaEdicaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
