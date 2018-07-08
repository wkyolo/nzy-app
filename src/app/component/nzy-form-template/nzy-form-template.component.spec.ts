import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzyFormTemplateComponent } from './nzy-form-template.component';

describe('NzyFormTemplateComponent', () => {
  let component: NzyFormTemplateComponent;
  let fixture: ComponentFixture<NzyFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzyFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzyFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
