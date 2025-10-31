import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 agrega esto
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // add RouterModule to allow routerLink
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  model = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviado = false;

  send() {
    console.log('Formulario enviado', this.model);
    this.enviado = true;

    // Limpiar formulario después de enviar
    this.model = { nombre: '', email: '', mensaje: '' };

    // Mostrar aviso por 4 segundos
    setTimeout(() => (this.enviado = false), 4000);
  }
}
