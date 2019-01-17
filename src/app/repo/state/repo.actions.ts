import { Action } from '@ngrx/store';

export enum RepoActionTypes {
    Load = '[Repo] Load',
}

export class Load implements Action {
    type = RepoActionTypes.Load;

    constructor(public payload: any = null) {

    }
}

export type RepoActions = Load;