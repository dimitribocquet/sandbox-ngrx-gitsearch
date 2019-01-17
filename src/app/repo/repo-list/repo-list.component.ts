import { Load } from './../state/repo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { RepoService } from '../repo.service';

@Component({
  selector: 'cc-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  constructor(
    // private repoService: RepoService
    private store: Store<any>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new Load());

    // this.repoService.getRepos().subscribe();
  }

}
