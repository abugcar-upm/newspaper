import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Article} from '../interfaces/article';

@Component({
  imports: [FormsModule],
  selector: 'app-articles-list',
  styleUrl: './articles-list.css',
  templateUrl: './articles-list.html',
})

export class ArticlesList {
  article!: Article; // ask why we have to put the !
}
