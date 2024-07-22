// import { counterReducer } from './counter.reducer';
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setCounter } from '../action/counter.action';

export const initialState = 0;

export const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(setCounter, (state, {value}) => value)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

