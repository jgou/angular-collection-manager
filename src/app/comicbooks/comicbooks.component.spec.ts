import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicbooksComponent } from './comicbooks.component';

describe('ComicbooksComponent', () => {
  let component: ComicbooksComponent;
  let fixture: ComponentFixture<ComicbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
