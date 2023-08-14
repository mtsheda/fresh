import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsingMenuComponent } from './collapsing-menu.component';

describe('CollapsingMenuComponent', () => {
  let component: CollapsingMenuComponent;
  let fixture: ComponentFixture<CollapsingMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsingMenuComponent]
    });
    fixture = TestBed.createComponent(CollapsingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
