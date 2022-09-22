import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcticleComponent } from './components/article/arcticle.component';
import { CommentsComponent } from './components/comments/comments.component';



@NgModule({
  declarations: [
    ArcticleComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
