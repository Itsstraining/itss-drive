import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

<<<<<<< HEAD
=======


>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
<<<<<<< HEAD
=======

>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
