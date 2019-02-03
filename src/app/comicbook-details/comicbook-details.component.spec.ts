import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicbookDetailsComponent } from './comicbook-details.component';

describe('ComicbookDetailsComponent', () => {
  let component: ComicbookDetailsComponent;
  let fixture: ComponentFixture<ComicbookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicbookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
