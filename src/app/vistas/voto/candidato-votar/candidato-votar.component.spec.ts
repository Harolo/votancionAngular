import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoVotarComponent } from './candidato-votar.component';

describe('CandidatoVotarComponent', () => {
  let component: CandidatoVotarComponent;
  let fixture: ComponentFixture<CandidatoVotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoVotarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoVotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
