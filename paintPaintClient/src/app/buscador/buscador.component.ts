import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(
    public mainSrv:MainService
  ) { }
  textoBuscado = '';

  ngOnInit() {
  }
  buscar(){
    this.mainSrv.buscaTexto(this.textoBuscado);
  }
}
