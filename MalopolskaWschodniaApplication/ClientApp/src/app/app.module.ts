import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesTourismComponent } from './components/articles-tourism/articles-tourism.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleTourismComponent } from './components/article-tourism/article-tourism.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { registerLocaleData } from '@angular/common';
import myLocalePl from '@angular/common/locales/pl';
import { AuthService } from './components/services/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
registerLocaleData(myLocalePl);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesTourismComponent,
    ArticleTourismComponent,
    AddArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
