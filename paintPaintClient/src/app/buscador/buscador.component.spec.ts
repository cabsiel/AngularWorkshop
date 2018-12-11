import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorComponent } from './buscador.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MaterialModule } from '../app.material.mod';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('BuscadorComponent', () => {
  let component: BuscadorComponent;
  let fixture: ComponentFixture<BuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [ BuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
