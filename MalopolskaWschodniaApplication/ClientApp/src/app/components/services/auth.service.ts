import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Article_Type } from "../models/article_type";
import { User } from "../models/user.model";
import { UserLogin } from "../models/userLogin.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = "https://localhost:7214/api/Auth";

  constructor(private http: HttpClient) { }

  register(RegisterRequest: User): Observable<User> {
    return this.http.post<User>(this._authUrl + '/Register', RegisterRequest);
  }

  login(LoginRequest: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(this._authUrl + '/Login', LoginRequest);
  }

  public getMe(): Observable<string> {
    return this.http.get(this._authUrl+'/GetMe', {
      responseType: 'text',
    });
  }

}
