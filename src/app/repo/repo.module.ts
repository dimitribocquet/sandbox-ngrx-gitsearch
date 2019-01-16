import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list/repo-list.component';

@NgModule({
  declarations: [
    RepoListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RepoListComponent
  ]
})
export class RepoModule { }
