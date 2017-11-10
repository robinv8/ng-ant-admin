import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JtableComponent } from './jtable.component';

describe('JtableComponent', () => {
  let component: JtableComponent;
  let fixture: ComponentFixture<JtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
