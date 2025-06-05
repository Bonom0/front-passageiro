import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroCadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: PassageiroCadastroComponent;
  let fixture: ComponentFixture<PassageiroCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageiroCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassageiroCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
