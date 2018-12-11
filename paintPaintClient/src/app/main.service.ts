import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private subject = new Subject<any>();
  buscaTexto(texto: string) {
    this.subject.next({text: texto});
  }
  obtenTexto(): Observable<any>{
    return this.subject.asObservable();
  }

  constructor(private http: HttpClient) { }
  SERVER = 'http://localhost:8080';
  FILE_POPULATION = 'info-population.json'
  DATA_SOURCE = 'datasource.json'
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  public getInfoPopulation():Promise<any>{
    return this.getDataServer(this.SERVER + '/' + this.FILE_POPULATION)
  }

  public getDataSource():Promise<any>{
    return this.getDataServer(this.SERVER + '/' + this.DATA_SOURCE)
  }

  private getDataServer(destino):Promise<any>{
    return this.http.get(destino)
    .toPromise()
    .then(
      response => response as any
    )
    .catch(this.handleError);
  }
}
