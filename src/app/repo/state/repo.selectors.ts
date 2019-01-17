import { createFeatureSelector, createSelector} from '@ngrx/store';
import { RepoState } from './repo.reducer';

export const getRepoState = createFeatureSelector<RepoState>('repositories')

export const getAllRepos = createSelector(getRepoState, data => data.repos);

export const getRequestDatetime = createSelector(getRepoState, data => data.requestedAt);