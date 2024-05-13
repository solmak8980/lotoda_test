import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IotDashboardPage } from './iot-dashboard.page';

describe('IotDashboardPage', () => {
  let component: IotDashboardPage;
  let fixture: ComponentFixture<IotDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IotDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
