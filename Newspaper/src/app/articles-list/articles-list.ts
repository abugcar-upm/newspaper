import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Article} from '../interfaces/article';
import { NgClass } from '@angular/common';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-articles-list',
  styleUrl: './articles-list.css',
  templateUrl: './articles-list.html',
})

export class ArticlesList {
  article!: Article; // ask why we have to put the !

  constructor() { }

  ngOnInit(): void {
    this.article = {
      title: '',
      subtitle: '',
      body: '',
      abstract: '',
      category: '',
    };
  }

  sendForm(): void {
    window.alert("Received information: " + this.article.title + " " + this.article.subtitle + " " + this.article.body);
  }
}
