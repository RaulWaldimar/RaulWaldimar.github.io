import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadDetalleComponent } from './habilidad-detalle/habilidad-detalle';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner';
import { HabilidadesService, Habilidad } from '../../services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule, HabilidadDetalleComponent, LoadingSpinnerComponent],
  templateUrl: './habilidades.html',
  styleUrls: ['./habilidades.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[] = [];
  cargando = true;
  error: string | null = null;

  constructor(private habilidadesService: HabilidadesService) {}


  async ngOnInit() {
    try {
      this.cargando = true;
      this.error = null;
      this.habilidades = await this.habilidadesService.getHabilidades();
    } catch (err) {
      this.error = 'Error al cargar las habilidades. Por favor, intenta de nuevo.';
    } finally {
      this.cargando = false;
    }
  }

  async toggleDestacada(index: number) {
    try {
      const habilidad = {
        ...this.habilidades[index],
        destacada: !this.habilidades[index].destacada
      };
      await this.habilidadesService.actualizarHabilidad(index, habilidad);
      this.habilidades[index] = habilidad;
    } catch (err) {
      console.error('Error al actualizar la habilidad:', err);
    }
  }

  async actualizarNivel(index: number, cambio: number) {
    const nuevoNivel = this.habilidades[index].nivel + cambio;
    if (nuevoNivel >= 0 && nuevoNivel <= 100) {
      try {
        const habilidad = {
          ...this.habilidades[index],
          nivel: nuevoNivel
        };
        await this.habilidadesService.actualizarHabilidad(index, habilidad);
        this.habilidades[index] = habilidad;
      } catch (err) {
        console.error('Error al actualizar el nivel:', err);
      }
    }
  }
}
