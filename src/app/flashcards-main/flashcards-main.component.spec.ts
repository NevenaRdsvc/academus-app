import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsMainComponent } from './flashcards-main.component';

describe('FlashcardsMainComponent', () => {
  let component: FlashcardsMainComponent;
  let fixture: ComponentFixture<FlashcardsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
