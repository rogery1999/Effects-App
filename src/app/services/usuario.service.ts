import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseListUsers, ResponseUser } from '../interfaces/api-responses.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = environment.baseUrl;


  private get apiUrlUsers() : string {
    return `${ this.baseUrl }/users`
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<User[]> {
    const params = new HttpParams().set('delay', '3');
    return this.http.get<ResponseListUsers>(`${ this.apiUrlUsers }`, {params})
      .pipe(
        map( resp => resp.data )
      );
  }

  getUserById( id: string ): Observable<User> {
    return this.http.get<ResponseUser>(`${ this.apiUrlUsers }/${ id }`)
    .pipe(
      map( response => response.data )
    );
  }
}
