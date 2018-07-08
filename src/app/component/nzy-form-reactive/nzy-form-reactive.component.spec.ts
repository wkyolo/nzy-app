import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzyFormReactiveComponent } from './nzy-form-reactive.component';

describe('NzyFormReactiveComponent', () => {
  let component: NzyFormReactiveComponent;
  let fixture: ComponentFixture<NzyFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzyFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzyFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
