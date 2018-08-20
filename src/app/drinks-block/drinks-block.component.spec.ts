import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksBlockComponent } from './drinks-block.component';

describe('DrinksBlockComponent', () => {
  let component: DrinksBlockComponent;
  let fixture: ComponentFixture<DrinksBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
