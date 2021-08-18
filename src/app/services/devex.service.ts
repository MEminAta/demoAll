import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Injectable({
  providedIn: 'root'
})
export class DevexService {
  header!: HttpHeaders;
  dataSource: any;

  constructor(private http: HttpClient) {
    this.setHeader();
  }

  setHeader(): void {
    this.header = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json');
  }

  getAllForModels(ext: string): Observable<unknown> {
    return this.http.get(ext, {headers: this.header}).pipe(
      // @ts-ignore
      map((data: any[]) => {
        return data;
      }), catchError(error => {
        return throwError('getAllForModels hata!');
        return throwError(error);
      })
    );
  }

  getAllDevx(primaryKey: string, ext: string) {
    this.setHeader();
    const tokenCheck = this.header.get('ApmUretimAuthorization');
    this.dataSource = AspNetData.createStore({
      key: primaryKey,
      loadUrl: ext,
      insertUrl: ext,
      updateUrl: ext,
      deleteUrl: ext,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.headers = {Authorization: tokenCheck};
        ajaxOptions.xhrFields = {withCredentials: false};
      }
    });
    return this.dataSource;
  }

  getAllForModelWithPost(ext: string, obj: any): Observable<any> {
    this.setHeader();
    return this.http.post(ext, obj, {headers: this.header}).pipe(
      // @ts-ignore
      map((data: any[]) => {
        return data;
      }), catchError(error => {
        return throwError('getAllForModelWithPost hata!');
        return throwError(error);
      })
    );
  }
}
