import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as actions from '../actions';

export interface UsuarioState {
  id      : string | null;
  user    : User | null,
  loading : boolean,
  loaded  : boolean,
  error   : any
}

const usuarioInitialState: UsuarioState = {
  id      : null,
  user    : null,
  loading : false,
  loaded  : false,
  error   : null
}

const _usuarioReducer = createReducer( usuarioInitialState ,
  on( actions.cargarUsuario, (state, {id}) => ({...state, loading: true, id}) ),
  on( actions.cargarUsuarioSuccess, (state, {usuario}) => ({...state, user: {...usuario}, loading: false, loaded: true, error: null}) ),
  on( actions.cargarUsuarioError, (state, {payload}) => ({...state, error: payload, loading: false, loaded: false, user: null }) )
);

export function usuarioReducer (state: any, action: any ){
  return _usuarioReducer(state, action);
}
