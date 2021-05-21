import { FormGroup } from '@angular/forms';
import { Action, createReducer, on } from '@ngrx/store';
import { Product_Form_Validation } from '../action/admin-action';


export const adminProductFeatureKey = 'adminProductState';

export interface AdminProductState {
  productDetailformValidStatus: FormGroup;
}

export const initialState: AdminProductState = {
  productDetailformValidStatus: new FormGroup({})
};

const reducer = createReducer(
  initialState,
  on(Product_Form_Validation, (state, action) => (
    {
      ...state,
      productDetailformValidStatus: action.productDetailformValidStatus
    }
  )),
);

export function AdminProductReducer(state: AdminProductState | undefined, action: Action): any {
  return reducer(state, action);
}

