import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles1: Article[] = [];
  articles2: Article[] = [];
  articles3: Article[] = [];
  constructor(private articlesService: ArticleService) { }

  ngOnInit(): void {
    this.articlesService.getArticleWType(1)
      .subscribe({
        next: (articles1) => {
          this.articles1 = articles1;
        },
        error: (response) => {
          console.log(response);
        }
      })

    this.articlesService.getArticleWType(2)
      .subscribe({
        next: (articles2) => {
          this.articles2 = articles2;
        },
        error: (response) => {
          console.log(response);
        }
      })

    this.articlesService.getArticleWType(3)
      .subscribe({
        next: (articles3) => {
          this.articles3 = articles3;
        },
        error: (response) => {
          console.log(response);
        }
      })


  }

}
