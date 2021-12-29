import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(username: string, password: string){
    return this.http.post("http://localhost:8080/Washer/auth", {username: username, password: password})
    .subscribe(
      (userData: any)=> {
        console.log(userData);
        sessionStorage.setItem('username', username);
        let token= "Bearer "+userData.jwt;
        sessionStorage.setItem('token', token);
        console.log(token);
        sessionStorage.setItem('userId', userData.userId);
        sessionStorage.setItem('name', userData.name);
        this.router.navigate(['']);
      }
    );
  }

  register(user:any ){
    return this.http.post("http://localhost:8080/Washer/subs", user);
  }

  isLoggedIn(){
    let user= sessionStorage.getItem('username');
    console.log("------------"+user);
    console.log(sessionStorage.getItem('token'));
    return !(user==null);
  }

  logout(){
    sessionStorage.clear();
  }


}