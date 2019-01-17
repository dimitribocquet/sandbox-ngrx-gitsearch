import { Load } from './../state/repo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllRepos, getRequestDatetime } from '../state/repo.selectors';
import { Observable } from 'rxjs';
import { Repo } from '../repo';
// import { RepoService } from '../repo.service';

@Component({
  selector: 'cc-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos$: Observable<Repo[]>;
  requestDates$: Observable<Date>;

  constructor(
    // private repoService: RepoService
    private store: Store<any>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new Load());

    this.repos$ = this.store.select(getAllRepos);
    this.requestDates$ = this.store.select(getRequestDatetime);

    // this.repoService.getRepos().subscribe();
  }

}
