import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booktour } from './booktour';

describe('Booktour', () => {
  let component: Booktour;
  let fixture: ComponentFixture<Booktour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Booktour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Booktour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
