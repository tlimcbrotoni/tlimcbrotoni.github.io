import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article.model';
import { Article_Type } from '../models/article_type';
import { User } from '../models/user.model';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-article-tourism',
  templateUrl: './article-tourism.component.html',
  styleUrls: ['./article-tourism.component.css']
})
export class ArticleTourismComponent implements OnInit {

  articles: Article[] = [];
  urlSafe!: SafeResourceUrl;

  constructor(private articlesService: ArticleService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          var id_n = Number(id);
          this.articlesService.getArticle(id_n)
            .subscribe({
              next: (articles) => {
                this.articles = articles;
                this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.articles[0].googleLink);
                console.log(articles);
              },
              error: (response) => {
                console.log(response);
              }
            })
        }
      }
    })
  }

}
