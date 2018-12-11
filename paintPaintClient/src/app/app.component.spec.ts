import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { TablaComponent } from './tabla/tabla.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { MaterialModule } from './app.material.mod';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule, HttpClientModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        BuscadorComponent,
        TablaComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
