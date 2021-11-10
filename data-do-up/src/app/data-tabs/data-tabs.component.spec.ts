import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTabsComponent } from './data-tabs.component';

describe('DataTabsComponent', () => {
  let component: DataTabsComponent;
  let fixture: ComponentFixture<DataTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
