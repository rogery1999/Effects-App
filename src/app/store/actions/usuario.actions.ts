import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const cargarUsuario = createAction('[Usuarios] Cargar Usuario', props<{ id: string }>());
export const cargarUsuarioSuccess = createAction('[Usuarios] Cargar Usuario Success', props<{ usuario: User }>());
export const cargarUsuarioError = createAction('[Usuarios] Cargar Usuario Error', props<{ payload: any }>());
