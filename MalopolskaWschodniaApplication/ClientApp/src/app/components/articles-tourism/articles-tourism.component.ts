import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-articles-tourism',
  templateUrl: './articles-tourism.component.html',
  styleUrls: ['./articles-tourism.component.css']
})
export class ArticlesTourismComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articlesService: ArticleService) { }

  ngOnInit(): void {
    this.articlesService.getAllArticles()
      .subscribe({
        next: (articles) => {
          this.articles = articles;
          console.log(articles);
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

}
