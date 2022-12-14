import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiFeriadosService {

  constructor(private httpclient: HttpClient) { }


  getTopHeadLines(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://apis.digital.gob.cl/fl/feriados/2013/09/18'));

  }
}