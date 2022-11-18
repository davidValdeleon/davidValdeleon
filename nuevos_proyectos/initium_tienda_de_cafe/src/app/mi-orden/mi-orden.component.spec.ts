import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiOrdenComponent } from './mi-orden.component';

describe('MiOrdenComponent', () => {
  let component: MiOrdenComponent;
  let fixture: ComponentFixture<MiOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
