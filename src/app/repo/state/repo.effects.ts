import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RepoService } from '../repo.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RepoActionTypes, LoadSuccess } from './repo.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class RepoEffects {
    constructor(
        private repoService: RepoService,
        private actions$: Actions
    ) {

    }

    @Effect()
    loadRepos$: Observable<Action> = this.actions$.pipe(
        ofType(RepoActionTypes.Load),
        mergeMap((action) => {
            console.log('action here', action);
            return this.repoService.getRepos().pipe(
                map(repos => {
                    console.log('repos loaded', repos);
                    return new LoadSuccess(repos);
                })
            );
        })
    )
}