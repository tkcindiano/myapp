import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo3Component } from './todo3.component';

describe('Todo3Component', () => {
  let component: Todo3Component;
  let fixture: ComponentFixture<Todo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
