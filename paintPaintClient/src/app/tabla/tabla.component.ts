import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '../../../node_modules/@angular/material';
import { MainService } from '../main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit, OnDestroy {
  subscription = new Subscription;
  noData(arg0: any): any {
    console.log('Datos no obtenidos')
  }
  cruceDatos(){
    for(var i = 0; i< this.population.length; i++){
      let persona = this.population[i];
      for(var s = 0; s < this.sexes.length; s++){
        if(persona['sex'] == this.sexes[s]['key']){
          persona['sexo'] = this.sexes[s]['description']
        }
      }
      for(var c = 0; c < this.countries.length; c++){
        if(persona['country-id'] == this.countries[c]['id']){
          persona['country'] = this.countries[c]['description']
          persona['prefix'] = '+(' + this.countries[c]['prefix'] + ')'
        }
      }
    }
    this.hayDatos = true;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  
  hayDatos: boolean;
  myColumns = ['name', 'datebirthday', 'sex', 'phone', 'country', 'lastModification'];
  population: Array<any>;
  dataSource: MatTableDataSource<any>;
  countries: any;
  languages: any;
  sexes: Array<any>;
  constructor(
    public mainSrv: MainService
  ) {
    this.subscription = mainSrv.obtenTexto().subscribe(texto=>{
      this.applyFilter(texto);
    })
  }

  ngOnInit() {
    this.hayDatos = false;
    this.mainSrv.getDataSource().then(dataSource=>{
      if(dataSource && dataSource['data']){
        this.countries = dataSource['data']['country']?dataSource['data']['country']:null
        this.languages = dataSource['data']['language']?dataSource['data']['language']:null
        this.sexes = dataSource['data']['sex']?dataSource['data']['sex']:null
        this.mainSrv.getInfoPopulation().then(pop=>{
          if(pop && pop['population'] && pop['population']['person']){
            this.population = pop['population']['person'];
            this.cruceDatos();
            this.dataSource = new MatTableDataSource<any>(this.population);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });
      }
    })
    .catch(this.noData);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  applyFilter(filterText: any){
    if(this.hayDatos){
      this.dataSource.filter = filterText.text.trim().toLocaleLowerCase();
      if(this.dataSource.paginator){
        this.dataSource.paginator.firstPage();
      }
    }
    
  }
}
