import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEditComponent } from './to-do-edit.component';

describe('ToDoEditComponent', () => {
  let component: ToDoEditComponent;
  let fixture: ComponentFixture<ToDoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoEditComponent]
    });
    fixture = TestBed.createComponent(ToDoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
