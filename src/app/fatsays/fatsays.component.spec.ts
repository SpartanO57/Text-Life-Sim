import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatsaysComponent } from './fatsays.component';

describe('FatsaysComponent', () => {
  let component: FatsaysComponent;
  let fixture: ComponentFixture<FatsaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatsaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatsaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
