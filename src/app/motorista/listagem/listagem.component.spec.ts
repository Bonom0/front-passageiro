import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: MotoristaListagemComponent;
  let fixture: ComponentFixture<MotoristaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoristaListagemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotoristaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
