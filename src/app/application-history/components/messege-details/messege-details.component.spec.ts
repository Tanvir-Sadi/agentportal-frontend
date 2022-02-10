import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegeDetailsComponent } from './messege-details.component';

describe('MessegeDetailsComponent', () => {
  let component: MessegeDetailsComponent;
  let fixture: ComponentFixture<MessegeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessegeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
