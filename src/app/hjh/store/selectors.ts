import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InputNameInterface } from './types/inputNameInterface';
import { AppStateInterface } from '../../shared/types/appState.interface';

export const inputnameFeatureSelector = createFeatureSelector<
  AppStateInterface,
  InputNameInterface
>('hjh');

export const getInputnsameSelector = createSelector(
  inputnameFeatureSelector,
  (inputname: InputNameInterface) => inputname.username
);
