import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarRejectComponent } from './toolbar-reject.component';

describe('ToolbarRejectComponent', () => {
  let component: ToolbarRejectComponent;
  let fixture: ComponentFixture<ToolbarRejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarRejectComponent]
    });
    fixture = TestBed.createComponent(ToolbarRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
