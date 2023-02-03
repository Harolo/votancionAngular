import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVotanteComponent } from './editar-votante.component';

describe('EditarVotanteComponent', () => {
  let component: EditarVotanteComponent;
  let fixture: ComponentFixture<EditarVotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
