import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import keys from '../../../keys'
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI = keys.api.API_URI + '/login';
  headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(private httpClient:HttpClient,private router: Router) { }

  loginUser(PKUsuario: string, password: any): Observable<any> {
    return this.httpClient.post(`${this.API_URI}`, { PKUsuario, password });
  };

  setUser(user:string, token:string) {
    user = JSON.stringify(user)
    localStorage.setItem("access_token", token);
    localStorage.setItem("currentUser", user);
  };

  
  public logoutUser() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('accestoken')
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/Login');
  }

  getCurrentperfil() {
    let perfil_string = localStorage.getItem('perfil');
    if (perfil_string) {
      let user = JSON.parse(perfil_string);
      return user;
    } else {
      return null
    }

  }

  getCurrentUser() {
    let user_string = localStorage.getItem('currentUser');
    if (user_string) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null
    }

  }


  public get isloggedIn(): boolean {
    let logued = localStorage.getItem('access_token')
    if (logued) {
      return true
    } else {
      return false;
    }
  }

}
