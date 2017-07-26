import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreInfoComponent } from './genre-info.component';

describe('GenreInfoComponent', () => {
  let component: GenreInfoComponent;
  let fixture: ComponentFixture<GenreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});