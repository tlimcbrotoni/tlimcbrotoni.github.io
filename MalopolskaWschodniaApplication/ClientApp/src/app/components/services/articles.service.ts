import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Article } from "../models/article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _articleUrl = "https://localhost:7214/api/Article";

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this._articleUrl + '/GetAllArticles');
  }

  getArticleWType(type: number): Observable<Article[]> {
    return this.http.get<Article[]>(this._articleUrl + '/GetArticleWType/' + type);
  }

  addArticle(AddArticleRequest: Article): Observable<Article> {
    return this.http.post<Article>(this._articleUrl + '/AddArticle', AddArticleRequest);
  }

  getArticle(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(this._articleUrl + '/GetArticle/' + id);
  }

}
