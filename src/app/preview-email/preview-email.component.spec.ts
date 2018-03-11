import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEmailComponent } from './preview-email.component';

describe('PreviewEmailComponent', () => {
  let component: PreviewEmailComponent;
  let fixture: ComponentFixture<PreviewEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
