import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './app.material.mod'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { TablaComponent } from './tabla/tabla.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms'
import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscadorComponent,
    TablaComponent,
    FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
