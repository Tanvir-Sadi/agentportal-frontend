import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDocumentListsComponent } from './application-document-lists.component';

describe('ApplicationDocumentListsComponent', () => {
  let component: ApplicationDocumentListsComponent;
  let fixture: ComponentFixture<ApplicationDocumentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDocumentListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDocumentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
