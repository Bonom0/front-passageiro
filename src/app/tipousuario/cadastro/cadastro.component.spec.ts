import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioCadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: TipoUsuarioCadastroComponent;
  let fixture: ComponentFixture<TipoUsuarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoUsuarioCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoUsuarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
