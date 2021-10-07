import {ActionReducerMap, createReducer, MetaReducer, on} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {AuthModel} from "../models/auth-model";
import {likesLikes} from "../actions/like.actions";
import {likesDislikes} from "../actions/dislike.actions";


export interface State {
  likes: number,
  auth: AuthModel,
}

const initialState: State = {
  likes: 0,
  auth: AuthModel.ANONYMOUS,
}

export const reducers: ActionReducerMap<State> = {
  likes: createReducer(
    initialState.likes,
    on(likesLikes, state => state + 1),
    on(likesDislikes, state => state - 1),
  ),
  auth: createReducer(
    initialState.auth
  ),
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
