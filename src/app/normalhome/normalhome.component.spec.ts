import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalhomeComponent } from './normalhome.component';

describe('NormalhomeComponent', () => {
  let component: NormalhomeComponent;
  let fixture: ComponentFixture<NormalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
