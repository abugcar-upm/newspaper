import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Article} from '../interfaces/article';
import { NgClass } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, NgClass, Highlight, CommonModule],
  selector: 'app-articles-list',
  styleUrl: './articles-list.css',
  templateUrl: './articles-list.html',
})

export class ArticlesList {
  article!: Article; // ask why we have to put the !
  articlesList: Article[];
  

  constructor() {
    this.articlesList = [
      { title: "Article 1", subtitle: "Subtitle 1", body: "Body 1", abstract: "Abstract 1", category: "National" },
      { title: "Article 2", subtitle: "Subtitle 2", body: "Body 2", abstract: "Abstract 2", category: "International" },
      { title: "Article 3", subtitle: "Subtitle 3", body: "Body 3", abstract: "Abstract 3", category: "Sports" },
    ];
   }

  ngOnInit(): void {
    this.article = {
      title: '',
      subtitle: '',
      body: '',
      abstract: '',
      category: 'National',
    };
  }

  addArticleToList(article: Article): void {
    let newArticle: Article = {
      title: article.title,
      subtitle: article.subtitle,
      body: article.body,
      abstract: article.abstract,
      category: article.category,
    };
    this.articlesList.push(newArticle);
  }

  resetForm(): void {
    this.article = {
      title: '',
      subtitle: '',
      body: '',
      abstract: '',
      category: 'National',
    };
  }

  submitForm(): void {
    this.addArticleToList(this.article);
    this.resetForm();
    window.alert("The article "+ this.article.title + " has been published");
  }

}