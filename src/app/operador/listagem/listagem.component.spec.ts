import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: OperadorListagemComponent;
  let fixture: ComponentFixture<OperadorListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperadorListagemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OperadorListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
