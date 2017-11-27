import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Usuario } from "./usuario";
import "rxjs/add/operator/toPromise"

@Injectable()
export class LoginService {

  private domain = 'http://localhost:8080';
  private url = 'http://localhost:8080/oauth/token';
  private registerUrl = 'http://localhost:8080/user/register'


  constructor(private http: Http) { }

  login(usuario: Usuario): Promise<void> {
    const headers = new Headers();
    headers.set('Authorization', 'Basic aGFyZGNvZGU6aEByZGMwZDM=');
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = `username=${usuario.username}&password=${usuario.senha}&grant_type=password&client=hardcode`;
 
    return this.http.post(this.url, body, { headers: headers }).toPromise()
      .then(response => {
        let token = response.json().access_token;
        localStorage.setItem('token',token);
      })
      .catch(response => {
        return Promise.reject(response);
      });
  }

  isLoggedIn(){
    if(localStorage.getItem('token')===null){
      return false;
    } else {
      return true;
    }
  }

  registrar(usuario : Usuario): Observable<any>{
    return this.http.post(this.registerUrl,usuario);
  }

  checkUsernameAvailable(username : string): Observable<any>{
    return this.http.post(`${this.domain}/user/username-available`,username);
  }

  checkEmailAvailable(email : string): Observable<any>{
    return this.http.post(`${this.domain}/user/email-available`,email);
  }

  logOut(){
    localStorage.clear();
  }
}