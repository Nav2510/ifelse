import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { GridResponse } from '../models/grid-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataGridService {
  private url = 'https://1.api.fy23ey04.careers.ifelsecloud.com/';

  constructor(private readonly http: HttpClient) {}

  fetchData(): Observable<GridResponse> {
    return this.http.get<GridResponse>(this.url);
  }
}
