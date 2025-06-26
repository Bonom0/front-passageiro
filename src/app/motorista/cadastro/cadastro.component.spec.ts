import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaCadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: MotoristaCadastroComponent;
  let fixture: ComponentFixture<MotoristaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoristaCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotoristaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
