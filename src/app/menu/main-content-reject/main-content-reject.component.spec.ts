import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentRejectComponent } from './main-content-reject.component';

describe('MainContentRejectComponent', () => {
  let component: MainContentRejectComponent;
  let fixture: ComponentFixture<MainContentRejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentRejectComponent]
    });
    fixture = TestBed.createComponent(MainContentRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
