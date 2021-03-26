import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseListUsers, ResponseUser } from '../interfaces/api-responses.interface';

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

  getAllUser(): Observable<ResponseListUsers> {
    return this.http.get<ResponseListUsers>(`${ this.apiUrlUsers }`);
  }

  getUserById( id: string ): Observable<ResponseUser> {
    return this.http.get<ResponseUser>(`${ this.apiUrlUsers }/${ id }`);
  }
}
