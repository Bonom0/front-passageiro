import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioEdicaoComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: TipoUsuarioEdicaoComponent;
  let fixture: ComponentFixture<TipoUsuarioEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoUsuarioEdicaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoUsuarioEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
