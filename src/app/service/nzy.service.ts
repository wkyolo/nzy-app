import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pwinfo } from '../model/pwinfo';
import { Zdinfo } from '../model/zdinfo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NzyService {

  private nzyServiceUrl = 'api/nzy';

  pwinfo = new Pwinfo('项目一', '单独选址', '国务院', '国务院[2018]号', '2018-07-04', 20.11);
  zdinfo: Zdinfo[] = [{zdmc: '宗地信息一', zdmj: 11.09}, {zdmc: '宗地信息二', zdmj: 20.05}];

  constructor(private http: HttpClient) { }

  getNzyPwinfoById(id: string): Observable<Pwinfo> {
    const url = `${this.nzyServiceUrl}/${id}`;
    return of(this.pwinfo);
    // return this.http.get<Pwinfo>(url).pipe(
    //   catchError(this.handleError<Pwinfo>('getNzyPwinfoById'))
    // );
  }

  getNzyExistZdinfo(): Observable<Zdinfo[]> {
    return of(this.zdinfo);
  }

  addNzyPwinfo(pwinfo: Pwinfo): Observable<Pwinfo> {
    return this.http.post<Pwinfo>(this.nzyServiceUrl, pwinfo, httpOptions).pipe(
      catchError(this.handleError<Pwinfo>('addNzyPwinfo'))
    );
  }

  updateNzyPwinfo(pwinfo: Pwinfo): Observable<Pwinfo> {
    return this.http.put(this.nzyServiceUrl, pwinfo, httpOptions).pipe(
      catchError(this.handleError<any>('updateNzyPwinfo'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
