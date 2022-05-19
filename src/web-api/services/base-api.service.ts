import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tags } from '../dto/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  public baseApi: string = '';

  public constructor(private http: HttpClient) {
    // this.baseApi = environment.api;
    this.baseApi = environment.mockApi;
  }

  public getAssessment(tag: string): Observable<any> {
    let api = `${this.baseApi}?tag=${tag}`;
    return this.http.get(api);
  }
}
