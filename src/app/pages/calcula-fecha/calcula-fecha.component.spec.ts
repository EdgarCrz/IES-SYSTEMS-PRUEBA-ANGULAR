import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaFechaComponent } from './calcula-fecha.component';

describe('CalculaFechaComponent', () => {
  let component: CalculaFechaComponent;
  let fixture: ComponentFixture<CalculaFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
