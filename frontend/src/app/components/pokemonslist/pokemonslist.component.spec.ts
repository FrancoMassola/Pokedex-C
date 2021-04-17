import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonslistComponent } from './pokemonslist.component';

describe('PokemonslistComponent', () => {
  let component: PokemonslistComponent;
  let fixture: ComponentFixture<PokemonslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonslistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
