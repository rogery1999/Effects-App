import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: User[] = [];

  constructor(
    private us: UsuarioService
  ) { }

  ngOnInit(): void {
    this.us.getAllUser()
    .subscribe(
      response => {
        this.usuarios = [...response.data];
        console.log(this.usuarios);
      },
      error => {
        console.error(error);
      }
    );
  }

}
