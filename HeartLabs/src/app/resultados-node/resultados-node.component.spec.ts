import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosNodeComponent } from './resultados-node.component';

describe('ResultadosNodeComponent', () => {
  let component: ResultadosNodeComponent;
  let fixture: ComponentFixture<ResultadosNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
