import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosTableComponent } from './alunos-table.component';

describe('AlunosTableComponent', () => {
  let component: AlunosTableComponent;
  let fixture: ComponentFixture<AlunosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
