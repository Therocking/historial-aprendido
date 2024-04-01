import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { environments } from 'src/environments/environments';
import { IUser } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environments.baseUrl
  private user?: IUser;

  constructor(private http: HttpClient) { }

  
  public get currentUser() : IUser|undefined {
    if(!this.user) return

    return structuredClone(this.user)
  }

  login(email: string, password: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem("token", user.id.toString()))
      )
  }

  checkAuthetication(): Observable<boolean> {
    const token = localStorage.getItem("token")

    if(!token) return of(false)

    return this.http.get<IUser>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false)),
      )
  }

  logout(): void {
    this.user = undefined
    localStorage.clear()
  }  
}


