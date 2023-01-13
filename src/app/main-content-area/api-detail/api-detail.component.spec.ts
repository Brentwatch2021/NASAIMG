import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDetailComponent } from './api-detail.component';

describe('ApiDetailComponent', () => {
  let component: ApiDetailComponent;
  let fixture: ComponentFixture<ApiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ApiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
