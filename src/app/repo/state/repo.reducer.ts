import { Repo } from '../repo';
import { RepoActions, RepoActionTypes } from './repo.actions';

export interface RepoState {
    repos: Repo[];
    requestedAt: Date;
    errorMessage: string;
}

const initialState: RepoState = {
    repos: [],
    requestedAt: null,
    errorMessage: ''
}

export function reducer(state = initialState, action: RepoActions) {
    switch (action.type) {
        case RepoActionTypes.Load:
            return {
                ...state,
                requestedAt: new Date().toISOString()
            }
        break;

        // default:
        //     return state;
    }
}