import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresTableComponent } from './professores-table.component';

describe('ProfessoresTableComponent', () => {
  let component: ProfessoresTableComponent;
  let fixture: ComponentFixture<ProfessoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
