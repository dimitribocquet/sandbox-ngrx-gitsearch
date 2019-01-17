import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RepoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RepoListComponent
  ]
})
export class RepoModule { }
