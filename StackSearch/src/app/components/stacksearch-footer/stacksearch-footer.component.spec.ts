import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksearchFooterComponent } from './stacksearch-footer.component';

describe('StacksearchFooterComponent', () => {
  let component: StacksearchFooterComponent;
  let fixture: ComponentFixture<StacksearchFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacksearchFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksearchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
