import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAddBromaComponent } from './comp-add-broma.component';

describe('CompAddBromaComponent', () => {
  let component: CompAddBromaComponent;
  let fixture: ComponentFixture<CompAddBromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAddBromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAddBromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
