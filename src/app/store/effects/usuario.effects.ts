import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';



@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private us: UsuarioService
  ){}

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType( usuarioActions.cargarUsuario ),
      mergeMap(
        ( action ) => this.us.getUserById(action.id)
          .pipe(
            map( usuario => usuarioActions.cargarUsuarioSuccess({usuario}) ),
            catchError( (err) => of(usuarioActions.cargarUsuarioError({ payload: ({ message: err.message, url: err.url, name: err.name }) })) )
          )
      )
    )
  );

}
