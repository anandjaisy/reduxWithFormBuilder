import { createAction, props } from '@ngrx/store';
import { AdminProductState } from '../reducer/admin-reducer';

export enum ProductEnums {
  FormValidation = 'form_validation',
  Admin_Product = 'admin_product'
}

export const Product_Form_Validation = createAction(ProductEnums.FormValidation, props<AdminProductState>());

export const ProductActions = Product_Form_Validation;