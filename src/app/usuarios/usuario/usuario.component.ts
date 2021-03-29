import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../store/app.reducers';
import { User } from '../../models/user.model';
import { cargarUsuario } from '../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

  user                  : User | null = null;
  userIdSubscription!   : Subscription;
  userStoreSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userIdSubscription = this.route.params
      .subscribe(
        ({id}) => {
          this.store.dispatch( cargarUsuario({id}) );
        }
      );

    this.userStoreSubscription = this.store.select('usuario')
      .subscribe(
        ({user}) => {
          this.user = user;
        }
      );
  }

  ngOnDestroy(): void {
    this.userIdSubscription.unsubscribe();
    this.userStoreSubscription.unsubscribe();
  }

}
