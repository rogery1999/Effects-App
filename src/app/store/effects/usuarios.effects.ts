import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';



@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private us: UsuarioService
  ){}

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType( usuariosActions.cargarUsuarios ),
      mergeMap(
        () => this.us.getAllUser()
          .pipe(
            map( usuarios => usuariosActions.cargarUsuariosSuccess({usuarios}) ),
            catchError( (err) => of(usuariosActions.cargarUsuariosError({ payload: ({ message: err.message, url: err.url, name: err.name }) })) )
          )
      )
    )
  );

}
