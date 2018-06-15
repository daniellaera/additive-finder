
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { AdditiveData } from './additive-data';

/*
  Generated class for the Additive provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Additive {

  constructor() { }

  load(): Observable<{
    id: string;
    name: string;
    level: string;
    type: string;
    info: string;
  }[]>

  load(): Observable<any> {
    return of(AdditiveData);
  }
}
