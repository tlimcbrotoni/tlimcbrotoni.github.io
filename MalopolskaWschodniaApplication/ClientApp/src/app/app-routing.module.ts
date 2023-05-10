import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleTourismComponent } from './components/article-tourism/article-tourism.component';
import { ArticlesTourismComponent } from './components/articles-tourism/articles-tourism.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'turystyka', component: ArticlesTourismComponent },
  { path: 'turystyka/:id', component: ArticleTourismComponent },
  { path: 'dodaj', component: AddArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
