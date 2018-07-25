import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
      private http: Http
  ) {}
  public getData(url: string): Observable <Client[]> {
    return this.http.get(url).pipe(map((res: Response) => res.json()));
  }
}
