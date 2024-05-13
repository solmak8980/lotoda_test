import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryReportPage } from './history-report.page';

describe('HistoryReportPage', () => {
  let component: HistoryReportPage;
  let fixture: ComponentFixture<HistoryReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
