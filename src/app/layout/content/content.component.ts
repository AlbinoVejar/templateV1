import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnChanges {

  formaUsuario!: FormGroup;
  showModal: Boolean = false;
  success: Boolean = false;

  @Input()
  IdUsuario: number;

  @Output()
  CerrarModalEvento = new EventEmitter<Boolean>();


  constructor(private acRoute:ActivatedRoute,
              private usuarioService: UsuarioService,
              private fb : FormBuilder) 
              { 
                this.crearFormulario();
              }
              
  ngOnChanges(): void {
    console.log(this.IdUsuario);

    this.usuarioService.getUsuario(this.IdUsuario).then( ({data} : any) => { 
           this.formaUsuario.patchValue(data); // binding entre Formulario y Objecto formulario.nombre = data.nombre 
     }).catch(err => {})  // Recibir la información
  }

  get nombreNoValido()
  { 
    return this.formaUsuario.get('Nombre')?.invalid && this.formaUsuario.get('Nombre')?.touched
  }

  get ApellidoNoValido()
  { 
    return this.formaUsuario.get('Apellidos')?.invalid && this.formaUsuario.get('Apellidos')?.touched
  }

  get FechaNoValido()
  {
    return this.formaUsuario.get('FechaNacimiento')?.invalid && this.formaUsuario.get('FechaNacimiento')?.touched
  }

  onShowModal(){
    this.showModal = !this.showModal;
  }

  crearFormulario()
  {
      this.formaUsuario = this.fb.group({
        Nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        Apellidos: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        Direccion: [''],
        Ciudad: [''],
        Estado: [''],
        Cp: [''],
        FechaNacimiento: ['',[Validators.required]]
      });
  }

  guardar()
  {
    if( this.formaUsuario.invalid){

      return Object.values( this.formaUsuario.controls).forEach( control => {
        if ( control instanceof FormGroup){
          Object.values( this.formaUsuario.controls).forEach( control => control.markAllAsTouched());
        }
        else{
          control.markAllAsTouched();
        }
      });
      
    }
    else
    {
      this.usuarioService.updateUsuario(this.IdUsuario, this.formaUsuario.value).then(
        data => 
        
      Swal.fire({
        title: this.formaUsuario.value.Nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      }))
      this.success = true;
    }
  }

  CerrarModal()
  {
    this.CerrarModalEvento.emit(this.success);
  }

}
