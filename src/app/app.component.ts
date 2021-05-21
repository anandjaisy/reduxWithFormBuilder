import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product_Form_Validation } from './action/admin-action';
import { AdminProductState } from './reducer/admin-reducer';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AlignmentLayoutDirection, Appearance, BaseFormComponent, ComponentType, FxLayout, IComponentConfig, IMeta, InputTypes } from '@falcon-ng/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseFormComponent<any> implements OnInit{
  private adminProductState: AdminProductState = {} as AdminProductState;
  constructor(private store: Store<AdminProductState>,fb: FormBuilder)   {
    super(fb);
    this.defineForm();
  }

  ngOnInit(): void {
    this.form = this.createControls();
    this.adminProductState.productDetailformValidStatus = this.form;
    this.store.dispatch(Product_Form_Validation(this.adminProductState));
  }

protected defineForm(): void {
    this.controlsConfig =
    {
      container: {
        fxLayout: FxLayout.Column,
        fxLayoutAlignHorizontal: AlignmentLayoutDirection.SpaceBetween,
        fxLayoutAlignVertical: AlignmentLayoutDirection.None,
        layoutConfig: [{
          fxLayout: FxLayout.Column,
          fxLayoutGap: '10px',
          fxLayoutAlignHorizontal: AlignmentLayoutDirection.Start,
          fxLayoutAlignVertical: AlignmentLayoutDirection.Center,
          componentConfig: [
          {
            componentProperty: {
              label: 'Title',
              appearance: Appearance.Outline,
              placeHolder: 'Active',
              attrType: 'text',
            },
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Required Field'
              }],
            componentType: 0,
            formControlName: 'title'
          }]
        }]
      }
    };
  }

  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

}