import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzyFormNzComponent } from './nzy-form-nz.component';

describe('NzyFormNzComponent', () => {
  let component: NzyFormNzComponent;
  let fixture: ComponentFixture<NzyFormNzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzyFormNzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzyFormNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
