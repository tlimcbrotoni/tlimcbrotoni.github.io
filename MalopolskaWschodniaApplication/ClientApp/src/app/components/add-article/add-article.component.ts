import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article_Type } from '../models/article_type';
import { User } from '../models/user.model';
import { ArticleService } from '../services/articles.service';
import { Article_TypeService } from '../services/article_types.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [DatePipe]
})
export class AddArticleComponent implements OnInit {
  article_types: Article_Type[] = [];
  public addarticleForm !: FormGroup;
  today = new Date();
  title: string = "";

  userRequest: User = {
    id: '00000000-0000-0000-0000-000000000000',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  typeRequest: Article_Type = {
    id: 0,
    typeName: ''
  };
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private articlesService: ArticleService, private article_typesService: Article_TypeService) { }

  ngOnInit(): void {
    this.addarticleForm = this.formBuilder.group({
      Title: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      ShortDescription: new FormControl('', [Validators.required]),
      Date: new FormControl(this.today),
      GoogleLink: new FormControl('', [Validators.required]),
      UserId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      User: this.userRequest,
      Type: this.typeRequest,
      TypeId: new FormControl(''),
    })

    this.article_typesService.getAllArticleTypes().subscribe({
      next: (types) => {
        this.article_types = types;
        console.log(types);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  addArticle() {
    console.log(this.addarticleForm.value)
    this.articlesService.addArticle(this.addarticleForm.value).subscribe({
      next: (v) => {
        this.router.navigate(['turystyka']);
      },
      error: (e) => {
        this.addarticleForm.reset();
      }
    });
  }

}
