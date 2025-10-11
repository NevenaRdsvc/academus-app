import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsPlayComponent } from './flashcards-play.component';

describe('FlashcardsPlayComponent', () => {
  let component: FlashcardsPlayComponent;
  let fixture: ComponentFixture<FlashcardsPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsPlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
