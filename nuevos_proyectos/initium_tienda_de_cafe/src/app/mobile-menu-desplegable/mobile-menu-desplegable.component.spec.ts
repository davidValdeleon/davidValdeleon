import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuDesplegableComponent } from './mobile-menu-desplegable.component';

describe('MobileMenuDesplegableComponent', () => {
  let component: MobileMenuDesplegableComponent;
  let fixture: ComponentFixture<MobileMenuDesplegableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuDesplegableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenuDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
