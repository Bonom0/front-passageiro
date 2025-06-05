import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: PassageiroListagemComponent;
  let fixture: ComponentFixture<PassageiroListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageiroListagemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassageiroListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
