import { Injectable } from '@angular/core';

export interface Habilidad {
  nombre: string;
  nivel: number;
  descripcion: string;
  destacada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private habilidadesData: Habilidad[] = [
    {
      nombre: 'Angular',
      nivel: 85,
      descripcion: 'Desarrollo de aplicaciones web SPA',
      destacada: true
    },
    {
      nombre: 'TypeScript',
      nivel: 80,
      descripcion: 'Programación orientada a objetos con tipos',
      destacada: false
    },
    {
      nombre: 'HTML/CSS',
      nivel: 90,
      descripcion: 'Maquetación y estilos web responsive',
      destacada: true
    },
    {
      nombre: 'Node.js',
      nivel: 75,
      descripcion: 'Desarrollo backend y APIs REST',
      destacada: false
    }
  ];

  async getHabilidades(): Promise<Habilidad[]> {
    // Simulamos un retardo de carga entre 1 y 2 segundos
    const delay = Math.random() * 1000 + 1000;
    
    // Simulamos posibles errores (20% de probabilidad)
    const shouldFail = Math.random() < 0.2;

    await new Promise(resolve => setTimeout(resolve, delay));

    if (shouldFail) {
      throw new Error('Error al cargar las habilidades');
    }

    return [...this.habilidadesData];
  }

  async actualizarHabilidad(index: number, habilidad: Habilidad): Promise<void> {
    // Simulamos un retardo de actualización
    await new Promise(resolve => setTimeout(resolve, 500));
    this.habilidadesData[index] = habilidad;
  }
}