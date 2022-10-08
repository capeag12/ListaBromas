import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBromaComponent } from './comp-broma.component';

describe('CompBromaComponent', () => {
  let component: CompBromaComponent;
  let fixture: ComponentFixture<CompBromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
