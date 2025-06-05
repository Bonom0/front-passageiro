import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: TipoUsuarioListagemComponent;
  let fixture: ComponentFixture<TipoUsuarioListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoUsuarioListagemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoUsuarioListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
