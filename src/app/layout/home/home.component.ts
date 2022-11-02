import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  usuarios: any[] = [];
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().then(({data}: any) => {
      console.log(data);
      this.usuarios = data;
    }).catch(err => {
      console.warn(err);
    })
  }

}
