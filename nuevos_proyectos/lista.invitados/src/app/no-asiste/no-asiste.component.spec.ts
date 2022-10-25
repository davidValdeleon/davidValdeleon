import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAsisteComponent } from './no-asiste.component';

describe('NoAsisteComponent', () => {
  let component: NoAsisteComponent;
  let fixture: ComponentFixture<NoAsisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAsisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAsisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
