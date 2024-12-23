import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfScannerComponent } from './pdf-scanner.component';

describe('PdfScannerComponent', () => {
  let component: PdfScannerComponent;
  let fixture: ComponentFixture<PdfScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfScannerComponent]
    });
    fixture = TestBed.createComponent(PdfScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
