import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: User[] = [];
  usuariosSubs!: Subscription;
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch( cargarUsuarios() );
    this.usuariosSubs = this.store.select('usuarios')
      .subscribe(
        ({users, loading, error}) => {
          this.loading = loading;
          this.error = error;
          this.usuarios = [...users];
        }
      );
  }

  ngOnDestroy(): void {
    this.usuariosSubs.unsubscribe();
  }

}
