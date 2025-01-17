import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
  private http = inject(HttpClient);

  PostErrorData(): Observable<any>{
    return this.http.post('https://run.mocky.io/v3/7870a7d6-95a6-4f39-bd1b-b47ec11e157d', null);
  }

  PostSuccessData(): Observable<any>{
    return this.http.post('https://run.mocky.io/v3/0b17153c-4288-44cd-9f41-447cdeb7bb84', null);
  }

  DelayUser(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?delay=30');
  }
}
