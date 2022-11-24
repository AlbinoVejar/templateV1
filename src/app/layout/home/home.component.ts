import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  usuarios: any[] = [];
  showModal: Boolean = false;
  IdUsuario: number;
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().then(({data}: any) => {
      this.usuarios = data;
    }).catch(err => { })
  }

  borrarUsuario(id: number, index: number)
  {
    Swal.fire({
      title: 'Esta Seguro ?',
      text: `Esta seguro que desea borrar el usuario ? `,
      icon: 'question',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
    }).then( ({value}) => {

      if ( value )
      {
        this.usuarios.splice(index, 1);
        this.usuarioService.deleteUsuario( id )
        .then();
      }

    })
  }

  onShowModal(id?: number){
    this.showModal = !this.showModal;
    if(id)
    {
      this.IdUsuario = id;  
    }
  }

  CerrarModal(event)
  {
    if(event)
    {
      this.showModal = false;
      this.usuarioService.getUsuarios().then(({data}: any) => {
        this.usuarios = data;
      }).catch(err => { })
    }
  }

}
