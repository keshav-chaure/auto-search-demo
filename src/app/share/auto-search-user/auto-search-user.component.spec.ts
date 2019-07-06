import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchUserComponent } from './auto-search-user.component';

describe('AutoSearchUserComponent', () => {
  let component: AutoSearchUserComponent;
  let fixture: ComponentFixture<AutoSearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSearchUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
