import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as actions from '../actions';

export interface UsuariosState {
  users: User[],
  loading: boolean,
  loaded: boolean,
  error: any
}

const usuariosInitialState: UsuariosState = {
  users: [],
  loading: false,
  loaded: false,
  error: null
}

const _usuariosReducer = createReducer( usuariosInitialState ,
  on( actions.cargarUsuarios, state => ({...state, loading: true}) ),
  on( actions.cargarUsuariosSuccess, (state, {usuarios}) => ({...state, users: [...usuarios], loading: false, loaded: true, error: null}) ),
  on( actions.cargarUsuariosError, (state, {payload}) => ({...state, error: payload, loading: false, loaded: false }) )
);

export function usuariosReducer (state: any, action: any ){
  return _usuariosReducer(state, action);
}
