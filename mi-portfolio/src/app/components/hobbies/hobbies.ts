import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { CapitalizarPipe } from '../../pipes/capitalizar.pipe';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizarPipe],
  templateUrl: './hobbies.html',
  styleUrls: ['./hobbies.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: any[] = [];
  filtro = '';
  favoritos = new Set<string>();
  seleccionado = new Set<string>();
  

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.hobbies = this.datosService.obtenerHobbies();
  }

  get hobbiesFiltrados(): any[] {
    const term = this.filtro ? this.filtro.toLowerCase() : '';
    return this.hobbies.filter(h => h.nombre.toLowerCase().includes(term));
  }

  toggleFavorito(hobby: any): void {
    if (this.favoritos.has(hobby.nombre)) {
      this.favoritos.delete(hobby.nombre);
    } else {
      this.favoritos.add(hobby.nombre);
    }
  }

  mostrarDetalles(hobby: any): void {
    // Alterna la visualización de detalles para el hobby (multiple seleccionable)
    if (this.seleccionado.has(hobby.nombre)) {
      this.seleccionado.delete(hobby.nombre);
    } else {
      this.seleccionado.add(hobby.nombre);
    }
  }

  obtenerDetalles(hobby: any): { label: string; url?: string }[] {
    return hobby.detalles || [];
  }
}
