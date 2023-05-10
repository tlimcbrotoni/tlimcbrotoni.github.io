import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Article_Type } from "../models/article_type";

@Injectable({
  providedIn: 'root'
})
export class Article_TypeService {
  private _typeUrl = "https://localhost:7214/api/TypeArticles";

  constructor(private http: HttpClient) { }

  getAllArticleTypes(): Observable<Article_Type[]> {
    return this.http.get<Article_Type[]>(this._typeUrl + '/GetAllArticleTypes');
  }
}
