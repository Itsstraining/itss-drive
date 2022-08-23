import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InroComponent } from './inro.component';

describe('InroComponent', () => {
  let component: InroComponent;
  let fixture: ComponentFixture<InroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
