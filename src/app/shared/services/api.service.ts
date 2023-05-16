import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  mainUrl = 'http://localhost:3000/';

  getData(path: string) {
    // const token = localStorage.getItem('access_token');
    // const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(
      this.mainUrl + path //,{ headers }
    );
  }

  putData(path: string, data: any, id: number) {
    const url = this.mainUrl + path + `/${id}`;

    return this.http.put(url, data);
  }

  postData(path: string, data: any) {
    return this.http.post(this.mainUrl + path, data);
  }

  deleteData(path: string, id: number) {
    const url = this.mainUrl + path + `/${id}`;
    return this.http.delete(url);
  }
}
