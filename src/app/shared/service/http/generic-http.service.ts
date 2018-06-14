import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  public apiEndpoint: {} = {
    fakeApi: 'https://jsonplaceholder.typicode.com'
  };

  constructor(private _httpClient: HttpClient) { }

  get(api: 'fakeApi'|'toto', path: string = null): Observable<any> {
    if (!this.apiEndpoint[api]) {
      return of(new Error('API Endpoint do not exist.'));
    }
    return this._httpClient.get(`${this.apiEndpoint[api]}${(path) ? `${path}` : ``}`).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service API.`}`)))
    );
  }
}
