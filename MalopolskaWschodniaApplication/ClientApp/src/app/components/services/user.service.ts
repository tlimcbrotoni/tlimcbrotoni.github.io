import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Article_Type } from "../models/article_type";
import { User_1 } from "../models/user_1.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _typeUrl = "https://localhost:7214/api/User";

  constructor(private http: HttpClient) { }

   getUser(id: string): Observable <User_1[]> {
     return this.http.get<User_1[]>(this._typeUrl + '/GetUser/' + id);
  }
}
