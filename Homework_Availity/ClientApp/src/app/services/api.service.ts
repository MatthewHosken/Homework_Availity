import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable()
export class ApiService {
  baseUrl: string;
  headers: HttpHeaders;

  constructor(@Inject('BASE_URL') baseUrl: string, private readonly http: HttpClient) {
    this.baseUrl = baseUrl;

    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  registerMember(request: any): Observable<any> {

    return this.http.post<any>(this.baseUrl + 'api/register-member/' + request.accessingPersonNumber, JSON.stringify(request),
      {
        headers: this.headers,
        observe: 'response'
      });
  }

  

  getMethod(id: number) {
    return this.http.get<any>(this.baseUrl + 'api/get-method/' + id);
  }

}
