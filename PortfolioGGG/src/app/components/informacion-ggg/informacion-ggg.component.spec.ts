import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGGGComponent } from './informacion-ggg.component';

describe('InformacionGGGComponent', () => {
  let component: InformacionGGGComponent;
  let fixture: ComponentFixture<InformacionGGGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionGGGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGGGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
