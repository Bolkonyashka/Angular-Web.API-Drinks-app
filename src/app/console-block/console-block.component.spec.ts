import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleBlockComponent } from './console-block.component';

describe('ConsoleBlockComponent', () => {
  let component: ConsoleBlockComponent;
  let fixture: ComponentFixture<ConsoleBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
