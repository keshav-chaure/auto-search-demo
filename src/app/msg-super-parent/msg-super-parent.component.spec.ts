import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSuperParentComponent } from './msg-super-parent.component';

describe('MsgSuperParentComponent', () => {
  let component: MsgSuperParentComponent;
  let fixture: ComponentFixture<MsgSuperParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgSuperParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgSuperParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
