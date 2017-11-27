import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
@Injectable()
export class ChatService {

  constructor(private _http:Http) { }

  getUser()
  {
    return this._http.get("/checkUser")
    .map(data => {return data.json()}).toPromise();
  }

  setUser(userName)
  {
    return this._http.get("/user/"+userName)
    .map(data => {
      return data.json();
    }).toPromise();
  }

  logout()
  {
    return this._http.get("/logout")
    .map(data => {
      console.log(data.json());
    }).toPromise();
  }

  callHome()
  {
    return this._http.get("/")
  }
  

}
