import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMonitoringComponent } from './vendor-monitoring.component';

describe('VendorMonitoringComponent', () => {
  let component: VendorMonitoringComponent;
  let fixture: ComponentFixture<VendorMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
