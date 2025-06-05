import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroEdicaoComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: PassageiroEdicaoComponent;
  let fixture: ComponentFixture<PassageiroEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageiroEdicaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassageiroEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
