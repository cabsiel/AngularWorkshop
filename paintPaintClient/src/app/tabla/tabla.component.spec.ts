import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';
import { MatTableModule, MatPaginatorModule } from '../../../node_modules/@angular/material';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [ TablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
