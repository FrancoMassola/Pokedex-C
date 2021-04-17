import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoneditComponent } from './pokemonedit.component';

describe('PokemoneditComponent', () => {
  let component: PokemoneditComponent;
  let fixture: ComponentFixture<PokemoneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemoneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
