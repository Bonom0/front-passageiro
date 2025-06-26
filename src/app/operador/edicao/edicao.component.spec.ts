import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorEdicaoComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: OperadorEdicaoComponent;
  let fixture: ComponentFixture<OperadorEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperadorEdicaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OperadorEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
