import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './state/repo.reducer';

@NgModule({
  declarations: [
    RepoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('repos', reducer)
  ],
  exports: [
    RepoListComponent
  ]
})
export class RepoModule { }
