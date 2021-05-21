import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { AdminProductReducer } from './admin-reducer';
  import { AdminProductState } from './admin-reducer';
  
  export interface ApplicationState {
    adminProduct: AdminProductState;
  }
  
  export const reducers: ActionReducerMap<ApplicationState> = {
    adminProduct: AdminProductReducer
  };
  
  export const metaReducers: MetaReducer<ApplicationState>[] = [];
  