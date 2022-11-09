import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  formaUsuario!: FormGroup;
  DatosUsuario: any[] = [];
  constructor(private acRoute:ActivatedRoute,
              private usuarioService: UsuarioService,
              private fb : FormBuilder) 
              { 
                this.crearFormulario();
              }

  ngOnInit(): void {
   
    let id = this.acRoute.snapshot.params['id']; //agarrar el id

    this.usuarioService.getUsuario(id).then( ({data} : any) => { this.DatosUsuario = data; 
    }).catch(err => {})  // Recibir la información
  }

  get nombreNoValido()
  { 
    return this.formaUsuario.get('nombre')?.invalid && this.formaUsuario.get('nombre')?.touched
  }

  crearFormulario()
  {
      this.formaUsuario = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(5)]],
      });
  }

  guardar()
  {}

}
