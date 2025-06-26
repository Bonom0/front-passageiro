import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorCadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: OperadorCadastroComponent;
  let fixture: ComponentFixture<OperadorCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperadorCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OperadorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
