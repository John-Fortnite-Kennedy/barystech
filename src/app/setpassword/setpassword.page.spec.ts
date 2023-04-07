import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetpasswordPage } from './setpassword.page';

describe('SetpasswordPage', () => {
  let component: SetpasswordPage;
  let fixture: ComponentFixture<SetpasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
