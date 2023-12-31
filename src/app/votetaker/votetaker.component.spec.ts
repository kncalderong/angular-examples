import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotetakerComponent } from './votetaker.component';

describe('VotetakerComponent', () => {
  let component: VotetakerComponent;
  let fixture: ComponentFixture<VotetakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotetakerComponent]
    });
    fixture = TestBed.createComponent(VotetakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
