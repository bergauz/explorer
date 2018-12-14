import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaBannerComponent } from './pwa-banner.component';

describe('PwaBannerComponent', () => {
  let component: PwaBannerComponent;
  let fixture: ComponentFixture<PwaBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
